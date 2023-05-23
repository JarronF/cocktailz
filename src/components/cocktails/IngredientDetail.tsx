import { useState, useEffect } from "react";
import axios from "axios";
import { IIngredient } from "@/models/IIngredient";
import LoadingIndicator from "../ui/LoadingIndicator";
interface IIngredientDetailProps {
    name: string;
    imageUrl?: string;
    onShowDetail: (ingredientId: string | null) => void;
}

const urlQuery = `${import.meta.env.VITE_API_BASEURL}search.php?i=`;

const IngredientDetail: React.FC<IIngredientDetailProps> = ({
    name,
    imageUrl,
    onShowDetail,
}) => {
    const [show, setShow] = useState(true);
    const [ingredient, setIngredient] = useState<IIngredient | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getDetails = async (endPoint: string) => {
        try {
            const response = await axios.get(endPoint);
            const details: IIngredient = response.data.ingredients[0];
            setIngredient(details);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const api = `${urlQuery}${name}`;
        getDetails(api);
    }, [name]);

    const onClose = () => {
        setShow(false);
        onShowDetail(null);
    };

    if (isLoading)
        return (
            <dialog open={show}>
                <LoadingIndicator />
            </dialog>
        );

    return (
        <dialog open={show}>
            <article>
                <header>
                    <a
                        href="#close"
                        aria-label="Close"
                        className="close"
                        onClick={onClose}
                    ></a>
                    {ingredient && <span>{name}</span>}
                    {!ingredient && <span>Ingredient failed to load</span>}
                </header>
                {ingredient && (
                    <p>
                        <img src={imageUrl} alt={name} />
                        {ingredient?.strDescription}
                    </p>
                )}
            </article>
        </dialog>
    );
};

export default IngredientDetail;
