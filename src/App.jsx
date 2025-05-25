import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesDetailsPage = lazy(() => import("./pages/MoviesDetailsPage/MoviesDetailsPage"));
const MovieCast = lazy(() => import("../src/components/MovieCast"));
const MovieReviews = lazy(() => import("../src/components/MovieReviews"));
const MoviePage = lazy(() => import("./pages/MoviesPage"));

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Search Movies</NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />

          <Route path="/movies/:movieId" element={<MoviesDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;