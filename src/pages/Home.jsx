import MovieCard from "../components/MovieCard.jsx"
import { useState } from "react"

function Home(){

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "The Dark Knight", releaseDate: "2008"},
        {id: 2, title: "Inception", releaseDate: "2010"},
        {id: 3, title: "Interstellar", releaseDate: "2014"},
        {id: 4, title: "The Matrix", releaseDate: "1999"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert("Hello")
        setSearchQuery("")
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies ..."
                        className="search-input" value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}


export default Home