import axios from "axios";
import { Cocktail } from "models/Cocktail";
import CocktailItem from "components/cocktails/CocktailItem";
import { getRandomNumber, getFeaturedDrinks } from "../../utils/cocktail-util";
import { useState, useEffect } from "react";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}?c=Cocktail`;
const displayQty = 5;
const initialStatelist: Cocktail[] = [];

const CocktailList: React.FC = () => {
    const [featuredDrinks, setFeaturedDrinks] =
        useState<Cocktail[]>(initialStatelist);

    useEffect(() => {
        const drinkIndices: number[] = [];
        const getDrinks = async () => {
            const response = await axios.get(urlQuery);
            const drinkList = response.data.drinks;
            for (let i = 0; i < displayQty; i++) {
                drinkIndices.push(getRandomNumber(1, drinkList.length - 1));
            }

            setFeaturedDrinks(getFeaturedDrinks(drinkList, drinkIndices));
        };

        getDrinks().catch(console.error);
    }, []);

    if (featuredDrinks.length > 0) {
        const drinks = featuredDrinks.map((drink) => (
            <CocktailItem drink={drink} key={drink.idDrink} />
        ));

        return (
            <>
                <article>
                    <header>
                        <h4>Featured Cocktails</h4>
                    </header>
                    <div className="grid">{drinks}</div>
                </article>
            </>
        );
    }
    return <p>Loading featured drinks...</p>;
};

export default CocktailList;
