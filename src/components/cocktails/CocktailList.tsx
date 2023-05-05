import axios from "axios";
import { Cocktail } from "./Cocktail.ts";
import CocktailItem from "components/cocktails/CocktailItem";
import { useState, useEffect } from "react";

const baseUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
const howMany = 5;
const initialStatelist: Cocktail[] = [];

const CocktailList: React.FC = () => {
    const [drinkList, setDrinkList] = useState<Cocktail[]>(initialStatelist);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setDrinkList(response.data.drinks.slice(0, howMany));
        });
    }, []);

    const drinks = drinkList.map((drink) => (
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
};

export default CocktailList;
