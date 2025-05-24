import fetchSearch from "../fetchSearchFilms";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const MoviePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const searchQuery = searchParams.get("query");

    useEffect(() => {
        if (searchQuery) {
            fetchSearch(searchQuery).then(setMovies);
        }
    }, [searchQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setSearchParams({ query });
        }
    }

    return (
        <>
            <h3>Search Movie</h3>
            <form onSubmit={handleSubmit}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MoviePage;