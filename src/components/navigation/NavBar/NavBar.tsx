import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className={`headings ` + css.brand}>
                    <Link to="/">CocktailZ</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <strong>Search</strong>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
