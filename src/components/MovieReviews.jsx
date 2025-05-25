import fetchReview from "../fetchReview";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        const loadReviews = async () => {
            const reviews = await fetchReview(movieId);
            setReviews(reviews);
        }
        loadReviews();
    }, [movieId]);

    return (
        <>
            <h3>Reviews:</h3>
            {reviews.length === 0 && <p>No reviews yet.</p>}
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.author}</strong> :{review.content}
                    </li>
                ))}
            </ul >
        </>
    )
}

export default MovieReviews;