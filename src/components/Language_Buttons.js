const Language_Buttons = (props) => {
    return (
        <div className="flex flex-row justify-end px-1 py-1" role="group">
            <button 
                onClick={() => props.updateLang("all")} 
                className={`
                inline-block
                rounded-l 
                px-2
                border-l-4 border-t-4 border-b-4 border-white 
                ${props.language == "all"?"bg-slate-800 text-white":"bg-white text-slate-800"} 
                font-bold text-base
                focus:bg-slate-800 focus:text-white
                hover:bg-slate-700 hover:text-white
                `}
                >ALL</button>
            <button 
                onClick={() => props.updateLang("ch")} 
                className={`
                inline-block
                px-2
                border-t-4 border-b-4 border-white 
                ${props.language == "ch"?"bg-slate-800 text-white":"bg-white text-slate-800"} 
                font-bold text-base
                focus:bg-slate-800 focus:text-white
                hover:bg-slate-700 hover:text-white
                `}
                >CH</button>
            <button 
                onClick={() => props.updateLang("de")}
                className={`
                inline-block 
                px-2
                border-t-4 border-b-4 border-white 
                ${props.language == "de"?"bg-slate-800 text-white":"bg-white text-slate-800"}
                font-bold text-base
                focus:bg-slate-800 focus:text-white
                hover:bg-slate-700 hover:text-white
                `}
                >DE</button>
            <button 
                onClick={() => props.updateLang("en")}
                className={`
                inline-block
                rounded-r 
                px-2
                border-r-4 border-t-4 border-b-4 border-white 
                ${props.language == "en"?"bg-slate-800 text-white":"bg-white text-slate-800"}
                font-bold text-base
                focus:bg-slate-800 focus:text-white
                hover:bg-slate-700 hover:text-white
                `}
                >EN</button>
        </div>
    )
}

export default Language_Buttons;