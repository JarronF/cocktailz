import AlphabetList from "@/components/cocktails/AlphabetList";
import FeaturedCocktails from "@/components/cocktails/FeaturedCocktails";

const Home = () => {
    return (
        <>
            <main>
                <AlphabetList />
                <FeaturedCocktails />
            </main>
        </>
    );
};
export { Home };
