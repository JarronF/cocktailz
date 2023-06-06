import css from "./LoadingIndicator.module.css";

interface ILoadingText {
    text?: string;
}

const LoadingIndicator = ({ text = "Loading..." }: ILoadingText) => {
    return (
        <article className={css.loading}>
            <div aria-busy="true">{text}</div>
        </article>
    );
};
export default LoadingIndicator;
