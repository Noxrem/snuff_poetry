const Poetry_Textbox = ({ poem }) => (
    <>
        <div className="
            mt-4
            mb-4
            text-center
            text-3xl underline font-bold
            text-white">{poem.title}
        </div>
        <div className="
            whitespace-pre-wrap
            text-clip
            overflow-auto
            mx-1
            my-1
            px-1 py-1
            rounded
            bg-white
            text-center
            text-base text-slate-800">
            {poem.text}
        </div>
        <div className="
            grow
                font-bold
                text-center text-white
                mb-1">
                #{poem.id}
            </div>
    </>
);

export default Poetry_Textbox;