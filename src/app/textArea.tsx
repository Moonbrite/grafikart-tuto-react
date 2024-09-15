"use client";
import {useState} from "react";
import Title from "@/app/title";

function Textarea() {

    const [textArea, setTextArea] = useState("")
    const [isChecked, setIsChecked] = useState(false)


    const textAreaVerify = (e) => {
        setTextArea(e.target.value)
    }

    function toggleCheck() {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <Title>Text Area</Title>
            <form action="">
                <textarea
                    className="w-80 text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none shadow-lg shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0 box-border"
                    name=""
                    id=""
                    placeholder="Texte par défaut"
                    onChange={textAreaVerify}
                />
                <input onChange={toggleCheck} type="checkbox"/>
                <button type='button' disabled={!isChecked}>Envoyer</button>
            </form>
        </>
    );
}

export default Textarea;