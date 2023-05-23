import { ICocktail } from "@/models/ICocktail";
import { IIngredient } from "@/models/IIngredient";

const getRandomNumber = (low: number, high: number): number => {
    const random = Math.floor(Math.random() * (high - low + 1)) + 1;
    return random;
};

export const getFeaturedDrinks = (list: ICocktail[], indices: number[]) => {
    const featuredDrinks: ICocktail[] = [];
    for (const i in indices) {
        featuredDrinks.push(list[indices[i]]);
    }
    return featuredDrinks;
};

export const getRandomDrinkIndices = (
    drinkList: ICocktail[],
    displayQty: number
) => {
    const drinkIndices: number[] = [];
    for (let i = 0; i < displayQty; ) {
        const random = getRandomNumber(1, drinkList.length - 1);
        if (drinkIndices.includes(random)) {
            //ensure only unique drink ids are added
            continue;
        }
        drinkIndices.push(random);
        i++;
    }
    return drinkIndices;
};

export const buildIngredientList = (drink: ICocktail, imgUrl: string) => {
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
