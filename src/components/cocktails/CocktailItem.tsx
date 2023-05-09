import { Link } from "react-router-dom";
import { Cocktail } from "models/Cocktail";
const CocktailItem: React.FC<{ drink: Cocktail }> = ({ drink }) => {
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
