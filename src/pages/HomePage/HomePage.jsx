import fetchFilms from "../../fetch";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";

const HomePage = () => {
    const [movies, setFilms] = useState([]);

    useEffect(() => {
        const showData = async () => {
            const data = await fetchFilms();
            setFilms(data.results);
        };
        showData();
    }, []);

    return (
        <>
            <h1>Trend now</h1>
            <MovieList films={movies} />
        </>
    );
};

export default HomePage;