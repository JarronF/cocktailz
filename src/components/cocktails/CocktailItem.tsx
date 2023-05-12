import { Link } from "react-router-dom";
import { ICocktail } from "@/models/ICocktail";
const CocktailItem: React.FC<{ drink: ICocktail }> = ({ drink }) => {
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
