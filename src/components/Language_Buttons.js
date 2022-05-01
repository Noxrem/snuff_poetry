
const Language_Buttons = (props) => (
    <div className="flex flex-row justify-end" role="group">
        <button 
            onClick={props.clickCH} 
            className="
            inline-block
            rounded-l 
            px-3 py-1.5 
            border-2 border-blue-600 
            text-blue-600 font-medium text-xs
            hover:bg-blue-600
            active:bg-blue-700 active:text-white
            focus:bg-blue-600 focus:text-white
            "
            >CH</button>
        <button 
            onClick={props.clickDE}
            className="
            inline-block 
            px-3 py-1.5 
            border-t-2 border-b-2 border-blue-600 
            text-blue-600 font-medium text-xs
            hover:bg-blue-600
            active:bg-blue-700 active:text-white
            focus:bg-blue-600 focus:text-white
            "
            >DE</button>
        <button 
            onClick={props.clickEN}
            className="
            inline-block
            rounded-r 
            px-3 py-1.5 
            border-2 border-blue-600 
            text-blue-600 font-medium text-xs
            hover:bg-blue-600
            active:bg-blue-700 active:text-white
            focus:bg-blue-600 focus:text-white
            " 
            >EN</button>
    </div>
);

export default Language_Buttons;