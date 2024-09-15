"use client";
import {useState} from "react";
import {TextField} from "@mui/material";
function Formulaire(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [erreur, setErreur] = useState(false)



    const handleChange = (e,setter) => {
        e.preventDefault()
        setter(e.target.value)
        if (firstName === "" || lastName === "") {
            setErreur(true);
        }else{
            setErreur(false)
        }
    }


    return(
        <>
            <form action="">
                <TextField
                    className="me-3"
                    error={erreur}
                    onChange={(e) => handleChange(e, setFirstName)}
                    type="text"
                    name="lastName"
                    id="outlined-basic"
                    label="Prénom"
                    variant="outlined"
                    helperText={erreur && "Veuillez entrer un Prénom"}
                    required
                />
                <TextField
                    error={erreur}
                    onChange={(e) => handleChange(e, setLastName)}
                    type="text"
                    name="lastName"
                    id="outlined-basic"
                    label="Nom"
                    variant="outlined"
                    helperText={erreur && "Veuillez entrer un Nom"}
                    required
                />
            </form>
        </>
    );
}

export default Formulaire;