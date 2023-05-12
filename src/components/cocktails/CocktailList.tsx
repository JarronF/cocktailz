import axios from "axios";
import { ICocktail } from "@/models/ICocktail";
import CocktailItem from "components/cocktails/CocktailItem";
import { getRandomNumber, getFeaturedDrinks } from "../../utils/cocktail-util";
import { useState, useEffect } from "react";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}filter.php?c=Cocktail`;
const displayQty = 5;
const initialStatelist: ICocktail[] = [];

const CocktailList: React.FC = () => {
    const [featuredDrinks, setFeaturedDrinks] =
        useState<ICocktail[]>(initialStatelist);

    useEffect(() => {
        const drinkIndices: number[] = [];
        const getDrinks = async () => {
            const response = await axios.get(urlQuery);
            const drinkList: ICocktail[] = response.data.drinks;
            for (let i = 0; i < displayQty; ) {
                const random = getRandomNumber(1, drinkList.length - 1);
                if (drinkIndices.includes(random)) {
                    //ensure only unique drink ids are added
                    continue;
                }
                drinkIndices.push(random);
                i++;
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
