import CocktailList from "components/cocktails/CocktailList";

const Home = () => {
    return (
        <>
            <main>
                <CocktailList />
                <section>
                    <h4>Cocktail Review section</h4>
                    <ul>
                        <li>News item 1</li>
                        <li>News item 2</li>
                        <li>News item 3</li>
                    </ul>
                </section>
                <section>
                    <h4>Latest News section</h4>
                    <ul>
                        <li>News item 1</li>
                        <li>News item 2</li>
                        <li>News item 3</li>
                    </ul>
                </section>
            </main>
            <footer>
                <h3>Footer Section</h3>
                <section>
                    <h4>Newsletter sign up</h4>
                    <input type="text" />
                    <button>Submit</button>
                </section>
                <section>
                    <h4>Navigation section</h4>
                    <nav>
                        <ul>
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                            <li>Link 4</li>
                        </ul>
                    </nav>
                </section>
            </footer>
        </>
    );
};
export { Home };
