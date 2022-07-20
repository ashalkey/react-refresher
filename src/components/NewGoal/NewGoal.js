import React, {useState} from 'react';
import './NewGoal.css'

const NewGoal = props => {

    let [enteredText, setEnteredText] = useState('');
    
    const addGoalhandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }
        setEnteredText('');
        props.onAddGoal(newGoal);
    }

    const textChangedHandler = event => {
        enteredText = setEnteredText(event.target.value);
    }

    return (<form className="new-goal" onSubmit={addGoalhandler}>
        <input type="text" value={enteredText} onChange={textChangedHandler}/>
        <button type="submit"> Add Goal</button>
    </form>);
};

export default NewGoal;