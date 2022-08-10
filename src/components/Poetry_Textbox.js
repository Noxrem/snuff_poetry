const Poetry_Textbox = ({ poem }) => (
    <div className="poetry-textbox">
        <div className="
            flex items-center justify-center
            mt-4
            mb-4
            text-3xl underline font-bold
            text-white">{poem.title}</div>
        <div className="
            flex justify-center
            whitespace-pre-wrap
            mx-1
            my-1
            px-1 py-1
            rounded
            bg-white
            text-center
            text-base text-slate-800">{poem.text}</div>
    </div>
);

export default Poetry_Textbox;