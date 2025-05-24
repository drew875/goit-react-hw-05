import { Routes, Route, NavLink, } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import MoviesDetailsPage from "./pages/MoviesDetailsPage/MoviesDetailsPage";
import MovieCast from "../src/MovieCast";
import MovieReviews from "../src/MovieReviews";
import MoviePage from "./pages/MoviesPage"

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Search Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />

        <Route path="/movies/:movieId" element={<MoviesDetailsPage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

      </Routes >
    </>
  );
};

export default App;