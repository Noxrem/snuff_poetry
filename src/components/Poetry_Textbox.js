const Poetry_Textbox = ({ poem }) => (
    <div className="poetry-textbox">
        <h3>{poem.title}</h3>
        <p style={{ whiteSpace: 'pre' }}>{poem.text}</p>
    </div>
);

export default Poetry_Textbox;