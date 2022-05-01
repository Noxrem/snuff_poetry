const Poetry_Textbox = ({ poem }) => (
    <div className="poetry-textbox">
        <h2 className="text-3xl underline">{poem.title}</h2>
        <p>{poem.text}</p>
    </div>
);

export default Poetry_Textbox;