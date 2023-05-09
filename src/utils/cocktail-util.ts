import { Cocktail } from "models/Cocktail";

export const getRandomNumber = (low: number, high: number): number => {
    const random = Math.floor(Math.random() * (high - low + 1)) + 1;
    return random;
};

export const getFeaturedDrinks = (list: Cocktail[], indices: number[]) => {
    const featuredDrinks: Cocktail[] = [];
    for (let i = 0; i < indices.length; i++) {
        const drinkIndex = indices[i];
        featuredDrinks.push(list[drinkIndex]);
    }
    return featuredDrinks;
};
