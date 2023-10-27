import { useState } from "react";

function Input({onAddTask}) {
    const [newTaskName, setNewTaskName] = useState('');

    function onNewTaskNameChange(event) {
        const inputValue = event.target.value;

        setNewTaskName(inputValue);
    }

    function addTask() {
        onAddTask(newTaskName);

        setNewTaskName('');
    }

    return (
        <section className="input">
            <input className="input__input" value={newTaskName} placeholder="add your goal" onChange={onNewTaskNameChange}/>
            <button className="input__button" type="button" onClick={addTask}>add</button>
        </section>
    )
}

export default Input;