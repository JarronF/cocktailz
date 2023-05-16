import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ICocktail } from "@/models/ICocktail";
import IngredientsList from "./IngredientList";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}lookup.php?i=`;

const CocktailDetail = () => {
    const { id } = useParams();
    const [drink, setDrink] = useState<ICocktail | null>(null);

    useEffect(() => {
        const getDrinkById = async () => {
            const response = await axios.get(urlQuery + id);
            const drink = response.data.drinks[0];
            setDrink(drink);
        };
        getDrinkById().catch(console.error);
    }, [id]);

    let drinkItem = <h4>...Loading drinks...</h4>;
    if (!drink) {
        return drinkItem;
    }
    drinkItem = (
        <>
            <figure>
                <img src={drink.strDrinkThumb} />
            </figure>
            <section>
                <header className="grid">
                    <h2>{drink.strDrink}</h2>
                    <small>
                        <kbd>{drink.strTags}</kbd>
                    </small>
                </header>
                <IngredientsList drink={drink} />
                <p>
                    <strong>Glass type: </strong>
                    {drink.strGlass}
                </p>
                <p>
                    <strong>Method: </strong>
                    {drink.strInstructions}
                </p>
            </section>
        </>
    );

    return (
        <main>
            <article>
                <section className="grid">{drinkItem}</section>
            </article>
        </main>
    );
};

export default CocktailDetail;
