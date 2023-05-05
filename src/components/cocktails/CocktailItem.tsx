import { Cocktail } from "./Cocktail";
const CocktailItem: React.FC<{ drink: Cocktail }> = ({ drink }) => {
    return (
        <section>
            <figure>
                <img src={drink.strDrinkThumb} />
            </figure>
            <figcaption>
                <small>{drink.strDrink}</small>
            </figcaption>
        </section>
    );
};

export default CocktailItem;
