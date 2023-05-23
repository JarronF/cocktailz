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

const CocktailList: React.FC = () => {
    const [featuredDrinks, setFeaturedDrinks] = useState<ICocktail[] | null>(
        null
    );
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);

        const getDrinks = async () => {
            try {
                const response = await axios.get(urlQuery);
                const drinkList: ICocktail[] = response.data.drinks;
                const drinkIndices = getRandomDrinkIndices(
                    drinkList,
                    displayQty
                );
                setFeaturedDrinks(getFeaturedDrinks(drinkList, drinkIndices));
            } catch (err) {
                //TODO: need to show this in some kind of user feedback
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        getDrinks();
    }, []);

    if (isLoading) return <LoadingIndicator />;

    return (
        <article>
            <header>
                <h4>Featured Cocktails</h4>
            </header>
            <div className="grid">
                {!featuredDrinks && (
                    <p>There was a problem loading featured drinks</p>
                )}
                {featuredDrinks &&
                    featuredDrinks.map((drink) => (
                        <CocktailItem drink={drink} key={drink.idDrink} />
                    ))}
            </div>
        </article>
    );
};

export default CocktailList;
