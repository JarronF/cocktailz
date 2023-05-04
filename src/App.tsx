import "@picocss/pico";
import { Route, Routes } from "react-router-dom";
import { Home, About, News, Recipes, Reviews } from "pages/index";
import Header from "components/layout/Header";

const App = () => {
    // index.tsx is the entry point
    // App.tsx sets up the auth and routing
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </>
    );
};

export default App;
