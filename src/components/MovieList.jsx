import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MovieList = ({ films }) => {
    const location = useLocation();
    return (
        <ul>
            {films.map(film => (
                <li key={film.id}>
                    <h3>
                        <Link to={`/movies/${film.id}`} state={{ from: location }}>{film.title}</Link>
                    </h3>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;