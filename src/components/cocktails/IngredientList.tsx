import { ICocktail } from "@/models/ICocktail";
import { IIngredient } from "@/models/IIngredient";
import { useState } from "react";
import IngredientDetail from "./IngredientDetail";
import { buildIngredientList } from "../../utils/cocktail-util";

const imgUrl = `${import.meta.env.VITE_API_ING_IMG_URL}`;

interface Props {
    drink: ICocktail;
}

const IngredientList = ({ drink }: Props) => {
    const [ingredients, setIngredients] = useState<IIngredient[] | null>(null);

    const [selectedIngredientId, setSelectedIngredientId] = useState<
        string | null
    >(null);

    const showDetailHandler = (ingredientId: string | null) => {
        setSelectedIngredientId(ingredientId);
    };

    if (!ingredients) setIngredients(buildIngredientList(drink, imgUrl));

    return (
        <>
            {ingredients && (
                <>
                    <p>
                        <strong>Ingredients:</strong>
                    </p>
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
                </>
            )}
            {!ingredients && <p>Ingredients list failed to load</p>}
        </>
    );
};

export default IngredientList;
