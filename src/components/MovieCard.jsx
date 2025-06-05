import "../css/MovieCard.css"
import {useMovieContext} from "../contexts/MovieContext"

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClcik(e){
        e.preventDefault()
        if(favorite){
            removeFromFavorites(movie.id)
        }else{
            addToFavorites(movie)
        }
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClcik}>
                        {favorite ? (
                            <i className="fa-solid fa-heart active"></i>
                        ) : (
                            <i className="fa-solid fa-heart"></i>
                        )}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
        )
}

export default MovieCard