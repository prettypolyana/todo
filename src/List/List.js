import { useState } from "react";

import Input from '../Input/Input';
import './List.css';

function List() {
    const [todos, setTodos] = useState([]);

    function handleAddTask(taskName) {
        setTodos([...todos, taskName]);
    }

    function removeTask(index) {
        const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
        setTodos(newTodos);
    }

    return (
        <>
            <Input onAddTask={handleAddTask}/>
            <section className="list">
                <ul className="list__items">
                {todos.map((todo, index) => (
                    <>
                    <div className="list__task">
                        <input className="list__check" type='checkbox' id='aa' />
                        <label htmlFor="aa"></label>
                        <li key={index} className="list__item">{todo}</li>
                        <button className="list__delete" onClick={() => removeTask(index)}>X</button>
                    </div>
                    </>
                ))}
                </ul>
                
            </section>
        </>
    )
}

export default List;