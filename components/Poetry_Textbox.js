const Poetry_Textbox = ({ poem }) => (
    <div className="poetry-textbox">
        <h2>{poem.title}</h2>
        <p style={{ whiteSpace: 'pre' }}>{poem.text}</p>
    </div>
);

export default Poetry_Textbox;