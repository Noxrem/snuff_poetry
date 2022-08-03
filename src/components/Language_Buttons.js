
const Language_Buttons = (props) => (
    <div className="flex flex-row justify-end px-1 py-1" role="group">
        <button 
            onClick={props.clickCH} 
            className="
            inline-block
            rounded-l 
            px-3 py-1 
            border-4 border-white 
            bg-white
            text-slate-800 font-bold text-lg
            hover:bg-slate-700
            focus:bg-slate-800 focus:text-white
            "
            >CH</button>
        <button 
            onClick={props.clickDE}
            className="
            inline-block 
            px-3 py-1 
            border-t-4 border-b-4 border-white 
            bg-white
            text-slate-800 font-bold text-lg
            hover:bg-slate-700
            focus:bg-slate-800 focus:text-white
            "
            >DE</button>
        <button 
            onClick={props.clickEN}
            className="
            inline-block
            rounded-r 
            px-3 py-1 
            border-4 border-white 
            bg-white
            text-slate-800 font-bold text-lg
            hover:bg-slate-700
            focus:bg-slate-800 focus:text-white
            " 
            >EN</button>
    </div>
);

export default Language_Buttons;