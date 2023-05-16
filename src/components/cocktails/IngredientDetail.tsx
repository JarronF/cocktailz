import { useState, useEffect } from "react";
import axios from "axios";
import { IIngredient } from "@/models/IIngredient";
interface IngredientDetailProps {
    name: string;
    imageUrl?: string;
    onShowDetail: (ingredientId: string | null) => void;
}

const urlQuery = `${import.meta.env.VITE_API_BASEURL}search.php?i=`;

const IngredientDetail: React.FC<IngredientDetailProps> = ({
    name,
    imageUrl,
    onShowDetail,
}) => {
    const [show, setShow] = useState(true);
    const [ingredient, setIngredient] = useState<IIngredient | null>(null);

    useEffect(() => {
        const getDetails = async () => {
            const response = await axios.get(urlQuery + name);
            const details: IIngredient = response.data.ingredients[0];
            setIngredient(details);
        };
        getDetails();
    }, [name]);

    const onClose = () => {
        setShow(false);
        onShowDetail(null);
    };
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
                    {name}
                </header>

                <img src={imageUrl} alt={name} />
                {ingredient?.strDescription}
            </article>
        </dialog>
    );
};

export default IngredientDetail;
