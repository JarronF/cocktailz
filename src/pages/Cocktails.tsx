import { useEffect, useState } from "react";
import AlphabetList from "@/components/cocktails/AlphabetList";
import { ICocktail } from "@/models/ICocktail";
import axios from "axios";
import CocktailItem from "@/components/cocktails/CocktailItem";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import { useParams } from "react-router-dom";

const urlSearch = `${import.meta.env.VITE_API_BASEURL}search.php?f=`;

const Cocktails = () => {
    const { letter } = useParams();
    const [drinks, setDrinks] = useState<ICocktail[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (letter) {
            setIsLoading(true);
            const getDrinksByFirstLetter = async () => {
                try {
                    const response = await axios.get(`${urlSearch}${letter}`);
                    const drinkList: ICocktail[] = response.data.drinks;
                    setDrinks(drinkList);
                    setIsLoading(false);
                } catch (err) {
                    //TODO: need to show this in some kind of user feedback
                    console.log(err);
                }
            };
            getDrinksByFirstLetter();
        } else {
            setDrinks(null);
        }
    }, [letter]);

    if (isLoading) return <LoadingIndicator />;

    return (
        <article>
            <AlphabetList letter={letter} />
            {letter && !drinks && (
                <h4>
                    No drinks beginning with the letter - <u>{letter}</u>
                </h4>
            )}

            {letter && drinks && (
                <h4>
                    Cocktails beginning with - <u>{letter}</u>
                </h4>
            )}

            {!isLoading &&
                letter &&
                drinks && (
                    <h4>
                        Cocktails beginning with - <u>{letter}</u>
                    </h4>
                ) &&
                drinks.map((drink) => (
                    <CocktailItem key={drink.idDrink} drink={drink} />
                ))}
        </article>
    );
};

export { Cocktails };
