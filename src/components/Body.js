import { useState } from 'react'; // To update the poems
import Poetry_Textbox from "../components/Poetry_Textbox";
import Poetry_Buttons from "../components/Poetry_Buttons";
import { getRandom } from '../constants/helpers';
import styles from './Body.module.css';

const Body = ({ poems, initialPoem, count }) => {
    const [poem, setPoem] = useState(initialPoem)

    const updatePoem = () => {
        setPoem(poems[getRandom(count)]);
    }

    return (
        <div className={styles.bodyWrapper}>
            <Poetry_Textbox poem={poem} />
            <Poetry_Buttons clickRefresh={updatePoem}/>
        </div>
    )
}

export default Body;