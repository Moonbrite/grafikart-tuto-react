"use client";
import {useState} from "react";

function Persone() {

    const [persone, setPersone] = useState({
        firstName:'Jose',
        lastName:'Vale Costa',
        age:30
    })

    const incrementAge = () => {
        setPersone({...persone, age: persone.age + 1})
    }

    return (
        <>
            <ul>
                <li>
                    <h2>
                        {persone.firstName + " " + persone.lastName}
                    </h2>
                </li>
                <li>
                    {persone.age}
                </li>
                <li>
                    <button onClick={incrementAge}>Ajouter une année</button>
                </li>
            </ul>
        </>
    );
}

export default Persone;