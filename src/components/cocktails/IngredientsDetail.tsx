import { useState } from "react";

const buildIngredientList = (drink: any) => {
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
    return ingredientArray;
};

const IngredientsDetail: React.FC<{ drink: any }> = ({ drink }) => {
    const [ingredients, setIngredients] = useState<string[] | null>(null);

    const handleClick = (item: string) => {
        //alert("Moused Over " + item);

        alert("Clicked " + item);
    };

    let ingredientItem = <h4>...Loading ingredients...</h4>;

    if (!ingredients) {
        setIngredients(buildIngredientList(drink));
        return ingredientItem;
    }

    ingredientItem = (
        <ul>
            {ingredients.map((lineItem) => (
                <li onClick={() => handleClick(lineItem)} key={lineItem}>
                    {lineItem}
                </li>
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
