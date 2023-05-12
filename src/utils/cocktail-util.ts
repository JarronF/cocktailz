import { ICocktail } from "@/models/ICocktail";

export const getRandomNumber = (low: number, high: number): number => {
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
