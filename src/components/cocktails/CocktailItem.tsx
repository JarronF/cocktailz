import { Cocktail } from "./Cocktail";
const CocktailItem: React.FC<{ drink: Cocktail }> = ({ drink }) => {
    return (
        <article key={drink.id}>
            <figure>
                <h4>{drink.name}</h4>
                <img src={drink.thumbNail} />
            </figure>
            <footer>
                <sup>
                    <kbd>{drink.category}</kbd> <kbd>{drink.type}</kbd>
                </sup>
            </footer>
        </article>
    );
};

export default CocktailItem;
