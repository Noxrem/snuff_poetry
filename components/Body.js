import { useState } from 'react';   // To update the poems
import data from '../static/schnupf_dataset.json';
import Poetry_Textbox from "../components/Poetry_Textbox";
import Poetry_Buttons from "../components/Poetry_Buttons";
import { getPoem } from '../components/getPoem';

const Body = (props) => {
    
    //const nofPoems = data.length;       // Number of poems in the database
    // Calculate random index of poem (between 1 and number of poems)
    // const getRandomPoemIdx = () => {                      
    //     return Math.floor(Math.random() * nofPoems-1) + 1;   
    // }
    
    // const getPoem = (poemIdx) => {
    //     return data[poemIdx].text;
    // }

    // const [poemIdx, setPoemIdx] = useState(6);    // Initial poem in the textbox


    const updatePoem = () => {
        //setPoemIdx(getRandomPoemIdx(nofPoems));  // Set the next poem randommly
        props.poem = getPoem();
        this.setState({ poem: getPoem() });
    }

    

    return (
        <div className="body-wrapper">
            <Poetry_Textbox text={props.poem}/*text={getPoem(poemIdx)}*//>
            <Poetry_Buttons clickRefresh={updatePoem}/>
        </div>
    )

}

export default Body;