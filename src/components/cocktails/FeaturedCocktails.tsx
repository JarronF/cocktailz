import axios from "axios";
import { ICocktail } from "@/models/ICocktail";
import LoadingIndicator from "components/ui/LoadingIndicator";
import {
    getRandomDrinkIndices,
    getFeaturedDrinks,
} from "../../utils/cocktail-util";
import { useState, useEffect } from "react";
import CocktailList from "./CocktailList";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}filter.php?c=Cocktail`;
const displayQty = +`${import.meta.env.VITE_ROWQTY}`;

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

    return <CocktailList list={featuredDrinks} heading="Featured Cocktails" />;
};

export default FeaturedCocktails;
