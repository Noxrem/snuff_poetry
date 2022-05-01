import { useState } from 'react';   // To update the poems
import Poetry_Textbox from "../components/Poetry_Textbox";
import Poetry_Buttons from "../components/Poetry_Buttons";
import { getRandomIdx } from '../constants/helpers';

export const Body = ({ poems, count, initPoemIdx }) => {
    const [poem, setPoem] = useState(poems[initPoemIdx]);

    const updatePoem = () => {
        setPoem(poems[getRandomIdx(count)]);    // Get a new random poem object
    }

    return (
        <div className="body-wrapper">
            <Poetry_Textbox poem={poem}/>
            <Poetry_Buttons clickRefresh={updatePoem}/>
        </div>
    )

}

export default Body;