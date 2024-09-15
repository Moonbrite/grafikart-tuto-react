"use client";
import Title from "@/app/title";
import {useState} from "react";


function List({nameList}) {

    const [list, setList] = useState([
        "Tomate",
        "Fromage",
        "Yaourt"
    ])


    const deleteItem = (index) => {
        setList(prevList => prevList.filter((_, i) => i !== index));
    }


    return (
        <>
            <Title textColor="orange">{nameList}</Title>
            <ol>
                {
                    list.map((item, i) => (
                        <li key={i}>
                            {item}
                            <button
                                onClick={() => deleteItem(i)}
                                className="bg-red-700 text-white px-2 py-1 ml-2 rounded"
                            >
                                Suprimer
                            </button>
                        </li>
                    ))
                }
            </ol>
        </>
    );
}

export default List