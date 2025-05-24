const fetchMovieByID = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzU2MDUwMzVhNzczY2EwNDc3NzI1M2Q0NTNjNTYxZCIsIm5iZiI6MTc0NTc3NjkzMy4xNzIsInN1YiI6IjY4MGU3MTI1NzFkZWRjYjhhY2ViMDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUT2BDQ78aeONGW6YC9cNkFWhQSYwYY5c3ANdRNh0dM'
        }
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
        return await res.json();

    } catch (err) {
        console.error("errrrr", err);
    }
}

export default fetchMovieByID; 