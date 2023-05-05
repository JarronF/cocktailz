import { Cocktail } from "./Cocktail.ts";

const DUMMY_COCKTAILS: Cocktail[] = [
    {
        id: "C1",
        name: "Margarita",
        thumbNail:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        type: "Alcoholic",
        category: "Ordinary drink",
    },
    {
        id: "C2",
        name: "Corpse Reviver",
        thumbNail:
            "https://www.thecocktaildb.com/images/media/drink/gifgao1513704334.jpg",
        type: "Alcoholic",
        category: "Cocktail",
    },
];

const CocktailList: React.FC = () => {
    const drinks = DUMMY_COCKTAILS.map((drink) => (
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
    ));

    return <section className="grid">{drinks}</section>;
};

export default CocktailList;
