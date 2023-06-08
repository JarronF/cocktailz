import { Link } from "react-router-dom";
import { ICocktail } from "@/models/ICocktail";

interface Props {
    drink: ICocktail;
}

const CocktailItem = ({ drink }: Props) => {
    return (
        <Link to={`/cocktail/${drink.idDrink}`}>
            <section>
                <figure>
                    <img src={drink.strDrinkThumb} />
                </figure>
                <figcaption>
                    <small>{drink.strDrink}</small>
                </figcaption>
            </section>
        </Link>
    );
};

export default CocktailItem;
