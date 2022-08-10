import { useState } from 'react';   // To save button state
import Link from 'next/link';
import { useRouter } from 'next/router';    

const Language_Buttons = (props) => {
    const router = useRouter();

    const [lang, setLang] = useState("all");    // State stores selected language

    const updateLang = (lang) => {
        setLang(lang);  // Set the state to the new language
        router.push("/", "/", {locale: lang});  // Routes to the chosen locale path
    }

    return (
        <div className="flex flex-row justify-end px-1 py-1" role="group">
            

                <button 
                    onClick={() => updateLang("all")} 
                    className={`
                    inline-block
                    rounded-l 
                    px-2
                    border-4 border-white 
                    ${lang == "all"?"bg-slate-800 text-white":"bg-white text-slate-800"} 
                    font-bold text-base
                    focus:bg-slate-800 focus:text-white
                    `}
                    >ALL</button>
                <button 
                    onClick={() => updateLang("ch")} 
                    className={`
                    inline-block
                    px-2
                    border-t-4 border-b-4 border-white 
                    ${lang == "ch"?"bg-slate-800 text-white":"bg-white text-slate-800"} 
                    font-bold text-base
                    focus:bg-slate-800 focus:text-white
                    `}
                    >CH</button>
            <button 
                onClick={() => updateLang("de")}
                className={`
                inline-block 
                px-2
                border-t-4 border-b-4 border-white 
                ${lang == "de"?"bg-slate-800 text-white":"bg-white text-slate-800"}
                font-bold text-base
                focus:bg-slate-800 focus:text-white
                `}
                >DE</button>
            <button 
                onClick={() => updateLang("en")}
                className={`
                inline-block
                rounded-r 
                px-2
                border-4 border-white 
                ${lang == "en"?"bg-slate-800 text-white":"bg-white text-slate-800"}
                font-bold text-base
                focus:bg-slate-800 focus:text-white
                `}
                >EN</button>
        </div>
    )
}

export default Language_Buttons;