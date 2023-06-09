import axios from "axios";
import { ICocktail } from "@/models/ICocktail";
import CocktailItem from "components/cocktails/CocktailItem";
import LoadingIndicator from "components/ui/LoadingIndicator";
import {
    getRandomDrinkIndices,
    getFeaturedDrinks,
} from "../../utils/cocktail-util";
import { useState, useEffect } from "react";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}filter.php?c=Cocktail`;
const displayQty = 5;

const FeaturedCocktails = () => {
    const [featuredDrinks, setFeaturedDrinks] = useState<ICocktail[] | null>(
        null
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getDrinks = async () => {
        try {
            const response = await axios.get(urlQuery);
            const drinkList: ICocktail[] = response.data.drinks;
            const drinkIndices = getRandomDrinkIndices(drinkList, displayQty);
            setFeaturedDrinks(getFeaturedDrinks(drinkList, drinkIndices));
            setIsLoading(false);
        } catch (err) {
            //TODO: need to show this in some kind of user feedback
            console.log(err);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        getDrinks();
    }, []);

    if (isLoading) return <LoadingIndicator />;

    return (
        <>
            {featuredDrinks && (
                <article>
                    <header>
                        <h4>Featured Cocktails</h4>
                    </header>
                    <div className="grid">
                        {featuredDrinks.map((drink) => (
                            <CocktailItem key={drink.idDrink} drink={drink} />
                        ))}
                    </div>
                </article>
            )}
            {!featuredDrinks && (
                <p>There was a problem loading featured drinks</p>
            )}
        </>
    );
};

export default FeaturedCocktails;
