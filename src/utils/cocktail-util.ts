import { Cocktail } from "models/Cocktail";

export const getRandomNumber = (low: number, high: number): number => {
    const random = Math.floor(Math.random() * (high - low + 1)) + 1;
    return random;
};

export const getFeaturedDrinks = (list: Cocktail[], indices: number[]) => {
    const featuredDrinks: Cocktail[] = [];
    for (const i in indices) {
        featuredDrinks.push(list[indices[i]]);
    }
    return featuredDrinks;
};
