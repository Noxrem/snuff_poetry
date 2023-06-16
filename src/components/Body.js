import Poetry_Textbox from "../components/Poetry_Textbox";
import Poetry_Buttons from "../components/Poetry_Buttons";
import de from '../constants/de';   // German language package
import en from '../constants/en';   // English language package
import ch from '../constants/ch';   // Swiss German language package

export const Body = ({ poem, updatePoem, language, updateNsfw, nsfw}) => {
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
            >
                {content.greeting}
            </div>
            <Poetry_Textbox poem={poem} className=""/>
            <Poetry_Buttons clickRefresh={updatePoem} clickNsfw={updateNsfw} nsfw={nsfw} className=""/>
        </>
    )

}

export default Body;