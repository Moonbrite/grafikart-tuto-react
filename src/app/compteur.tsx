"use client";
import {useState} from "react";
import Title from "@/app/title";


function Compteur () {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <>
            <Title textColor="blue">Le compteur de ouf</Title>
            <p>Compteur : {count}</p>
            <button onClick={increment}>Incrémenter</button>
        </>
    );
}

export default Compteur;