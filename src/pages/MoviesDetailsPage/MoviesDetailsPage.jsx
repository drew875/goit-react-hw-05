import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMovieById from "../../fetchFilmsByID";


const MoviesDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadMovie = async () => {
            const data = await fetchMovieById(movieId);
            setMovie(data);
        };
        loadMovie();
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    return (

        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <h2>{movie.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '300px', borderRadius: '12px' }}
            />
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Release date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>

            <h4>More info: </h4>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviiews</Link>
                </li>

            </ul>
            <Outlet />
        </div>

    );
};

export default MoviesDetailsPage;