"use client";
import {useState} from "react";
function Formulaire(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [erreur, setErreur] = useState("");



    const handleChange = (e,setter) => {
        e.preventDefault()
        setter(e.target.value);
    }

    const displayFormulaire = (e) => {
        e.preventDefault()
        if (firstName === "" || lastName === "") {
            setErreur("Veuillez remplir tous les champs");
        } else {
            setErreur("");
        }

    }
    

    return(
        <>
            <form action="">
                <input
                    onChange={(e) => handleChange(e, setFirstName)}
                    type="text"
                    name="firstName"
                    placeholder="first Name"
                    required
                />
                <input
                    onChange={(e) => handleChange(e, setLastName)}
                    type="text"
                    name="lastName"
                    placeholder="last Name"
                    required
                />
                <button
                    type="button"
                    onClick={displayFormulaire}
                >
                    Afficher
                </button>
            </form>

            {erreur !== "" ? erreur : firstName + " " + lastName}
        </>
    );
}

export default Formulaire;