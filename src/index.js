// Your code here
console.log('hi')
function renderMovie(movie) {
    moviePoster = document.querySelector('#poster')
    movieTitle = document.querySelector('#title')
    movieRuntime = document.querySelector('#runtime')
    movieShowtime = document.querySelector('#showtime')
    movieAvailTick = document.querySelector('#ticket-num')
    movieInfo = document.querySelector('#film-info')
    movieButton = document.querySelector('#buy-ticket')

    moviePoster.src = movie.poster
    movieTitle.textContent = movie.title 
    movieRuntime.textContent = movie.runtime 
    movieShowtime.textContent = movie.showtime 
    movieAvailTick.textContent = (movie.capacity - movie.tickets_sold)
    movieInfo.textContent = movie.description

    movieButton.addEventListener('click', (e) => {
        if(movie.tickets_sold < movie.capacity) {
            movie.tickets_sold += 1
        }
        movieAvailTick.textContent = (movie.capacity - movie.tickets_sold)

    })

    
}

function renderTitles(titles) {
    const movieTitleList = document.querySelector('#films')
    console.log(titles)
    titles.forEach(data => {
        
        const movieTitle = document.createElement('li')
        movieTitle.textContent = data.title  
        //movieTitle.class = 'film item'
        movieTitleList.append(movieTitle)

        

    })
    

    


}

function fetchData(path=1){
    url = `http://localhost:3000/films/${path}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => renderMovie(data))
}
fetchData()

function fetchAllData() {
    url = `http://localhost:3000/films`
    fetch(url)
    .then(resp => resp.json())
    .then(data => renderTitles(data))
}
fetchAllData()
