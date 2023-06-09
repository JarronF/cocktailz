import { Link } from "react-router-dom";
import css from "./AlphabetList.module.css";

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

interface Props {
    letter?: string | undefined;
}
const AlphabetList = ({ letter }: Props) => {
    return (
        <article className={css.centred}>
            <p className={css.margin_top}>Browse by name:</p>
            {alphabet.map((firstLetter) => (
                <Link
                    className={
                        firstLetter === letter
                            ? `${css.link_button} contrast`
                            : css.link_button
                    }
                    to={`/cocktails/${firstLetter}`}
                    role="button"
                    key={firstLetter}
                >
                    {firstLetter}
                </Link>
            ))}
        </article>
    );
};
export default AlphabetList;
