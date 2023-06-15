import { useEffect, useState } from "react";
import AlphabetList from "@/components/cocktails/AlphabetList";
import { ICocktail } from "@/models/ICocktail";
import axios from "axios";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import { useParams } from "react-router-dom";
import CocktailList from "@/components/cocktails/CocktailList";

const urlSearch = `${import.meta.env.VITE_API_BASEURL}search.php?f=`;

const Cocktails = () => {
    const { letter } = useParams();
    const [drinks, setDrinks] = useState<ICocktail[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        if (letter) {
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
            setIsLoading(false);
        }
    }, [letter]);

    if (isLoading) return <LoadingIndicator />;

    return (
        <>
            <AlphabetList letter={letter} />
            {!letter && <p>Please select a letter above to display</p>}

            {letter && !drinks && <p>No drinks beginning with - {letter}</p>}

            {drinks && (
                <CocktailList
                    list={drinks}
                    heading={`Cocktails beginning with - ${letter}`}
                />
            )}
        </>
    );
};

export { Cocktails };
