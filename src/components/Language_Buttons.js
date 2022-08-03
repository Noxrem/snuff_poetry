import { useState } from 'react';   // To save button state

const Language_Buttons = (props) => {
    const [lang, setLang] = useState("ALL");    // State stores selected language

    const updateLang = (lang) => {

    }

    // Returns tailwind expression according the button activation
    const getBtnState = (button) => {
        switch (lang) {
            case "ALL":
                //return ()
                break;
            case "CH":
                break;
            case "DE":
                break;
            case "EN":
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex flex-row justify-end px-1 py-1" role="group">
            <button 
                onClick={() => setLang("CH")} 
                className={`
                inline-block
                rounded-l 
                px-3 py-1 
                border-4 border-white 
                ${lang == "CH"?"bg-slate-800 text-white":"bg-white text-slate-800"} 
                font-bold text-lg
                focus:bg-slate-800 focus:text-white
                `}
                >CH</button>
            <button 
                onClick={() => setLang("DE")}
                className={`
                inline-block 
                px-3 py-1 
                border-t-4 border-b-4 border-white 
                ${lang == "DE"?"bg-slate-800 text-white":"bg-white text-slate-800"}
                font-bold text-lg
                focus:bg-slate-800 focus:text-white
                `}
                >DE</button>
            <button 
                onClick={() => setLang("EN")}
                className={`
                inline-block
                rounded-r 
                px-3 py-1 
                border-4 border-white 
                ${lang == "EN"?"bg-slate-800 text-white":"bg-white text-slate-800"}
                font-bold text-lg
                focus:bg-slate-800 focus:text-white
                `}
                >EN</button>
        </div>
    )
}

export default Language_Buttons;