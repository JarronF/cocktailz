import "@picocss/pico";
import { Route, Routes } from "react-router-dom";
import { Home, About, News, Recipes, Reviews } from "pages/index";
import NavBar from "components/navigation/NavBar/NavBar";
import Footer from "components/navigation/Footer/Footer";
import Cocktail from "components/cocktails/Cocktail.tsx";

const App = () => {
    // index.tsx is the entry point
    // App.tsx sets up the auth and routing
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/cocktail/:id" element={<Cocktail />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
