import { Link } from "react-router-dom";
import css from "./AlphabetList.module.css";

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const AlphabetList = () => {
    return (
        <article className={css.centred}>
            <p className={css.margin_top}>Browse by name:</p>
            {alphabet.map((letter) => (
                <Link
                    className={css.link_button}
                    to={`/cocktails/${letter}`}
                    role="button"
                    key={letter}
                >
                    {letter}
                </Link>
            ))}
        </article>
    );
};
export default AlphabetList;
