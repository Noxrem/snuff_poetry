import { useState } from 'react';   // To update the poems
import Poetry_Textbox from "../components/Poetry_Textbox";
import Poetry_Buttons from "../components/Poetry_Buttons";
import { getRandomIdx, getRandomPoem } from '../constants/helpers';
import { getLangFilteredPoem } from '../constants/helpers';
import { useRouter } from 'next/router';
import de from '../constants/de';   // German language package
import en from '../constants/en';   // English language package
import ch from '../constants/ch';   // Swiss German language package
import { filteredPoems } from '../constants/helpers';   // Function to filter poems
import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes';

export const Body = ({ poems, count, initPoemIdx, initPoem, language }) => {

    // Language package
    let content = de;               // Variable containing the current language package
    switch(language) {              // Setting the language package according to the locale
        case "en": content = en;
        break;
        case "de": content = de;
        break;
        case "ch": content = ch;
        break;
        default: content = de;
    }

    // const [poem, setPoem] = useState(poems[initPoemIdx]);
    const [poem, setPoem] = useState(initPoem); // Set the initial poem

    const updatePoem = () => {
        let langFltPoems = getLangFilteredPoem(poems, language);    // Get poems filtered by language 
        setPoem(getRandomPoem(langFltPoems));                       // Get a new random language filtered poem object
        
    }

    return (
        <>
            <div className="
            items-center
            mx-1
            my-1
            px-1 py-1
            rounded
            bg-white
            text-center
            text-base
            text-slate-800"
            >{content.greeting}</div>
            <Poetry_Textbox poem={poem} className=""/>
            <Poetry_Buttons clickRefresh={updatePoem} className=""/>
        </>
    )

}

export default Body;