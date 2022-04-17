import Button from '../components/Button';

const Poetry_Buttons = props => (
    <div className="poetry-buttons-wrapper">
        <Button name="Contact" click={props.clickContact}/>
        <Button name="Refresh" click={props.clickRefresh}/>
        <Button name="NSFW" click={props.clickNsfw}/>
    </div>
);


export default Poetry_Buttons;