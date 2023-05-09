import { useParams } from "react-router-dom";

const Cocktail = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Showing Cocktail: {id}</h1>
        </div>
    );
};

export default Cocktail;
