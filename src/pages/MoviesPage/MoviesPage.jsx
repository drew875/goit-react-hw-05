import fetchSearch from "../../fetchSearchFilms";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import MovieList from "../../components/MovieList";

const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const backLink = useRef(location.state?.from || "/");

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
            <button onClick={() => navigate(backLink.current)}>Go back</button>
            <h3>Search Movie</h3>
            <form onSubmit={handleSubmit}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </>
    )
}

export default MoviesPage;