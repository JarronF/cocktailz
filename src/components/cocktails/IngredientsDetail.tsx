import { useState } from "react";

const IngredientsDetail: React.FC<{ drink: any }> = ({ drink }) => {
    const [ingredients, setIngredients] = useState<string[] | null>(null);

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

    let ingredientItem = <h4>...Loading ingredients...</h4>;
    if (!ingredients) {
        return ingredientItem;
    }
    ingredientItem = (
        <ul>
            {ingredients.map((lineItem) => (
                <li key={lineItem}>{lineItem}</li>
            ))}
        </ul>
    );

    return (
        <>
            <p>
                <strong>Ingredients:</strong>
            </p>
            <ul>{ingredientItem}</ul>
        </>
    );
};

export default IngredientsDetail;
