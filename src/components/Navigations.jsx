import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Search Movies</NavLink>
        </nav>
    )
}

export default Navigation;