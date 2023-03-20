import { Link } from 'react-router-dom';
import './MovieCard.scss';
function MovieCard({ title, movies }) {

    return (
        <div className="movie_card_wrapper">
            <h3 className="movie_row_title">{title}</h3>
            <div className="movie_card_row">
                {movies.map((movie, i) => (
                    <div className="movie_card" key={i}>
                        <Link to='/details' className="link">
                            <img src={movie} alt="" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCard