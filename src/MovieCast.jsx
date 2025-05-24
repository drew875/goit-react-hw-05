import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import fetchCast from "../src/fetchCast";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const castActors = async () => {
            const cast = await fetchCast(movieId);
            setCast(cast);
        }
        castActors();
    }, [movieId]);
    return (
        <>

            <h2>Cast:</h2>
            <ul>
                {cast.length === 0 && <p>No cast yet.</p>}
                {cast.map(actor => (
                    <li key={actor.id}>
                        {actor.name}as{actor.character}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default MovieCast;