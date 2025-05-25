import { Link } from "react-router-dom";

const MovieList = ({ films }) => {
    return (
        <ul>
            {films.map(film => (
                <li key={film.id}>
                    <h3>
                        <Link to={`/movies/${film.id}`}>{film.title}</Link>
                    </h3>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;