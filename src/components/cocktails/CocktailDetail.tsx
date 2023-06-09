import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ICocktail } from "@/models/ICocktail";
import IngredientsList from "./IngredientList";
import LoadingIndicator from "../ui/LoadingIndicator";

const urlQuery = `${import.meta.env.VITE_API_BASEURL}lookup.php?i=`;

const CocktailDetail = () => {
    const { id } = useParams();
    const [drink, setDrink] = useState<ICocktail | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getDrinkById = async (apiEndPoint: string) => {
        try {
            const response = await axios.get(apiEndPoint);
            const drink = response.data.drinks[0];
            setDrink(drink);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const api = `${urlQuery}${id}`;
        getDrinkById(api);
    }, [id]);

    if (isLoading) return <LoadingIndicator />;

    return (
        <>
            {drink && (
                <section className="grid">
                    <figure>
                        <img src={drink.strDrinkThumb} />
                    </figure>
                    <section>
                        <header className="grid">
                            <h2>{drink.strDrink}</h2>
                            <small>
                                <kbd>{drink.strTags}</kbd>
                            </small>
                        </header>
                        <IngredientsList drink={drink} />
                        <p>
                            <strong>Glass type: </strong>
                            {drink.strGlass}
                        </p>
                        <p>
                            <strong>Method: </strong>
                            {drink.strInstructions}
                        </p>
                    </section>
                </section>
            )}
            {!drink && <p>The selected drink was not found</p>}
        </>
    );
};

export default CocktailDetail;
