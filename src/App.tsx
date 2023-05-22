import "@picocss/pico";
import { Route, Routes } from "react-router-dom";
import { Home, About, News, Cocktails } from "pages/index";
import NavBar from "components/navigation/NavBar/NavBar";
import Footer from "components/navigation/Footer/Footer";
import CocktailDetail from "@/components/cocktails/CocktailDetail";

const App = () => {
    // index.tsx is the entry point
    // App.tsx sets up the auth and routing
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cocktails" element={<Cocktails />} />
                <Route path="/news" element={<News />} />
                <Route path="/cocktail/:id" element={<CocktailDetail />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
