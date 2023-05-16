import { ICocktail } from "@/models/ICocktail";
import { IIngredient } from "@/models/IIngredient";
import { useState } from "react";
import IngredientDetail from "./IngredientDetail";

const imgUrl = `${import.meta.env.VITE_API_ING_IMG_URL}`;

const buildIngredientList = (drink: ICocktail) => {
    const ingredientArray: IIngredient[] = [];
    for (let i = 1; i < 15; i++) {
        const ingredient: string | null | undefined =
            drink[`strIngredient${i}`];

        if (!ingredient) break;

        const measure: string | null = drink[`strMeasure${i}`]
            ? ` - ${drink[`strMeasure${i}`]}`
            : "";

        ingredientArray.push({
            id: `item_${i}`,
            name: `${ingredient}`,
            imageUrl: `${imgUrl}${ingredient}-Medium.png`,
            ingredientAndMeasure: `${ingredient}${measure}`.trim(),
        });
    }
    return ingredientArray;
};

const IngredientList: React.FC<{ drink: ICocktail }> = ({ drink }) => {
    const [ingredients, setIngredients] = useState<IIngredient[] | null>(null);

    const [selectedIngredientId, setSelectedIngredientId] = useState<
        string | null
    >(null);

    let ingredientItem = <h4>...Loading ingredients...</h4>;

    if (!ingredients) {
        setIngredients(buildIngredientList(drink));
        return ingredientItem;
    }

    const showDetailHandler = (ingredientId: string | null) => {
        setSelectedIngredientId(ingredientId);
    };
    ingredientItem = (
        <ul>
            {ingredients.map((ing) => (
                <li key={ing.id}>
                    <a onClick={() => showDetailHandler(ing.id)}>
                        {ing.ingredientAndMeasure}
                    </a>

                    {selectedIngredientId === ing.id && (
                        <IngredientDetail
                            name={ing.name}
                            imageUrl={ing.imageUrl}
                            onShowDetail={showDetailHandler}
                        />
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <p>
                <strong>Ingredients:</strong>
            </p>
            {ingredientItem}
        </>
    );
};

export default IngredientList;
