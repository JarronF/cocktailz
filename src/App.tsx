import "@picocss/pico";
import Header from "@/components/layout/Header";

const App = () => {
    // index.tsx is the entry point
    // App.tsx sets up the auth and routing
    return (
        <>
            <Header />
            <main>
                <section>
                    <h4>List of 5 random Cocktails</h4>
                    <ul>
                        <li>Cocktail 1</li>
                        <li>Cocktail 2</li>
                        <li>Cocktail 3</li>
                        <li>Cocktail 4</li>
                        <li>Cocktail 5</li>
                    </ul>
                </section>
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

export default App;
