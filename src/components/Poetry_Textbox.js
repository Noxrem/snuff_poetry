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
            mx-1
            my-1
            px-1 py-1
            rounded
            bg-white
            text-center
            text-base text-slate-800
            mb-4
            h-full
            max-h-max
            overflow-auto">{poem.text}
        </div>
    </>
);

export default Poetry_Textbox;