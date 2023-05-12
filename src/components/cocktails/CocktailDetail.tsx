import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ICocktail } from "@/models/ICocktail";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}lookup.php?i=`;

const CocktailDetail = () => {
    const { id } = useParams();
    const [drink, setDrink] = useState<ICocktail | null>(null);
    const [ingredients, setIngredients] = useState<string[] | null>(null);
    useEffect(() => {
        const getDrinkById = async () => {
            const response = await axios.get(urlQuery + id);
            const drink = response.data.drinks[0];
            const ingredientArray: string[] = [];

            for (let i = 1; i < 15; i++) {
                const ingredient: string | null = drink[`strIngredient${i}`];

                if (!ingredient) break;

                const measure: string | null = drink[`strMeasure${i}`]
                    ? ` - ${drink[`strMeasure${i}`]}`
                    : "";
                const itemLine = `${ingredient}${measure}`;
                ingredientArray.push(itemLine);
            }
            setIngredients(ingredientArray);
            setDrink(drink);
        };
        getDrinkById().catch(console.error);
    }, [id]);

    let drinkItem = <h4>...Loading drinks and ingredients...</h4>;
    if (!drink || !ingredients) {
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
                <p>
                    <strong>Ingredients:</strong>
                </p>
                <ul>
                    {ingredients.map((lineItem) => (
                        <li key={lineItem}>{lineItem}</li>
                    ))}
                </ul>
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
