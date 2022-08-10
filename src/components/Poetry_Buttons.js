
const Poetry_Buttons = props => (
    <div className="poetry-buttons-wrapper flex flex-row justify-center">
        <button className="
        inline-block
        w-16
        h-16
        m-4
        rounded
        bg-white
        " onClick={props.clickContact}>Contact</button>
        <button className="
            inline-block
            w-24
            h-24
            rounded
            bg-white
        " onClick={props.clickRefresh}>Refresh</button>
        <button className="
        inline-block
        w-16
        h-16
        m-4
        rounded
        bg-white
        " onClick={props.clickContact}>18+</button>
    </div>
);


export default Poetry_Buttons;