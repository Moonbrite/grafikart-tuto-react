import Compteur from "@/app/compteur";
import Persone from "@/app/persone";
import List from "@/app/list";
import Formulaire from "@/app/formulaire";
import TextArea from "@/app/textArea";



export default function Home() {

    return (
        <>
            <Compteur />
            <Persone />
            <List nameList="Liste course"/>
            <Formulaire/>
            <TextArea/>
        </>
    );
}
