const About = () => {
    return (
        <article>
            <header>
                <h2>About CocktailZ</h2>
            </header>
            <p>
                This is a simple website to explore various Cocktails, their
                ingredients and how to make them. Written in TypeScript and
                ReactJS.
            </p>

            <p>
                Please note that the application is still under construction and
                so some pages and features might not work properly.
            </p>

            <h4>Technology:</h4>
            <ul>
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>Axios</li>
                <li>picoCSS</li>
            </ul>

            <h4>Features:</h4>
            <ul>
                <li>
                    Home page displays 5 "featured" random cocktails, with links
                    to a further details page
                </li>
                <li>
                    Cocktail page displays selected cocktail title, image,
                    ingredients and method of mixing
                </li>
                <li>
                    Selecting ingredient displays modal with ingredient image
                    and description if provided
                </li>
                <li>
                    Pull data from API (
                    <a
                        href="https://www.thecocktaildb.com/api.php"
                        target="_blank"
                    >
                        https://www.thecocktaildb.com/api.php)
                    </a>
                </li>
            </ul>
        </article>
    );
};
export { About };
