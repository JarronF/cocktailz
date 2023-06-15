import { ICocktail } from "@/models/ICocktail";
import CocktailItem from "./CocktailItem";
import { useState } from "react";
import { sliceArrayIntoChunks } from "@/utils/cocktail-util";

interface Props {
    list: ICocktail[] | null;
    heading: string | undefined;
}

const chunkSize = +`${import.meta.env.VITE_ROWQTY}`;

const CocktailList = ({ list, heading }: Props) => {
    const [rows, setRows] = useState<ICocktail[][] | null>(null);

    if (list && !rows) {
        setRows(sliceArrayIntoChunks(list, chunkSize));
    }

    return (
        <>
            <article>
                <header>
                    <h4>{heading}</h4>
                </header>
                {rows && (
                    <>
                        {rows.map((row, index) => (
                            <div className="grid" key={index}>
                                {row.map((drink) => (
                                    <CocktailItem
                                        key={drink.idDrink}
                                        drink={drink}
                                    />
                                ))}
                            </div>
                        ))}
                    </>
                )}
            </article>
        </>
    );
};

export default CocktailList;
