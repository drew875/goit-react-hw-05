import fetchFilms from "../../fetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {

    const [films, setFilms] = useState([]);

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
            <ul> {films.map(film => (
                <li key={film.id}>
                    <h3>
                        <Link to={`/movies/${film.id}`}>  {film.title}</Link>
                    </h3>
                </li>
            ))}
            </ul>
        </>
    )
}

export default HomePage;