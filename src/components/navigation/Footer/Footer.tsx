import { Link } from "react-router-dom";
import css from "./Footer.module.css";
const Footer = () => {
    return (
        <footer>
            <article className="grid">
                <form>
                    <small>
                        <h4>Newsletter sign up</h4>
                        <p>
                            <small>
                                Get our best cocktail recipes, tips, and more
                                when you sign up for our newsletter.
                            </small>
                        </p>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            required
                        />
                        <button type="submit">Submit</button>
                    </small>
                </form>
                <aside className={`grid ` + css.left_space}>
                    <nav>
                        <small>
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
                                    <strong>Search</strong>
                                </li>
                            </ul>
                        </small>
                    </nav>

                    <nav className={css.left_space}>
                        <small>
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                            </ul>
                        </small>
                    </nav>
                </aside>
            </article>
        </footer>
    );
};

export default Footer;
