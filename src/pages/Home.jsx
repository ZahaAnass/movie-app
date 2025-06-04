import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1, title: "The Dark Knight", releaseDate: "2008"},
        {id: 2, title: "Inception", releaseDate: "2010"},
        {id: 3, title: "Interstellar", releaseDate: "2014"},
        {id: 4, title: "The Matrix", releaseDate: "1999"}
    ]

    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => {
                    <MovieCard movie={movie} key={movie.id}/>
                })}
            </div>
        </div>
    )
}


export default Home