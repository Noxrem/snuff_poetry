import { useState } from 'react';   // To update the poems
import data from '../static/schnupf_dataset.json';
import Poetry_Textbox from "../components/Poetry_Textbox";
import Poetry_Buttons from "../components/Poetry_Buttons";
import { getRandPoem } from '../components/getRandPoem';

const Body = ({ poems, initPoem }) => {
    console.log('initPoem: ', initPoem);
    const [currentPoem, setCurrentPoem] = useState(initPoem);
    //const nofPoems = poems.length;       // Number of poems in the database

    const updatePoem = () => {
        setCurrentPoem(getRandPoem(poems));  // Set the next poem randommly
        console.log('currentPoem: ', currentPoem);
    }
    return (
        <div className="body-wrapper">
            <Poetry_Textbox text={"currentPoem.title"}/>
            <Poetry_Buttons clickRefresh={updatePoem}/>
        </div>
    )

}

export default Body;