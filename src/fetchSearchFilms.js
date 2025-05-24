import axios from "axios";

const fetchSearch = async (query) => {
    if (!query) return [];

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzU2MDUwMzVhNzczY2EwNDc3NzI1M2Q0NTNjNTYxZCIsIm5iZiI6MTc0NTc3NjkzMy4xNzIsInN1YiI6IjY4MGU3MTI1NzFkZWRjYjhhY2ViMDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUT2BDQ78aeONGW6YC9cNkFWhQSYwYY5c3ANdRNh0dM'
        },
        params: {
            query,
            page: 1,
        }
    };
    try {
        const dataSearch = await axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
        return dataSearch.data.results;
    } catch (err) {
        console.log("err", err)
    }

}

export default fetchSearch;