import { Link } from "react-router-dom";
import { ICocktail } from "@/models/ICocktail";
import css from "./CocktailItem.module.css";

interface Props {
    drink: ICocktail;
}

const CocktailItem = ({ drink }: Props) => {
    return (
        <section className={css.maxWidth}>
            <Link to={`/cocktail/${drink.idDrink}`}>
                <figure>
                    <img src={drink.strDrinkThumb} />
                </figure>
                <figcaption>
                    <small>{drink.strDrink}</small>
                </figcaption>
            </Link>
        </section>
    );
};

export default CocktailItem;
