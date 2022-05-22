import React from "react";
import { useState } from "react";


const Todo = () => {
    let [newTodos , setTodo] = useState("");
    const [todos,setTodos] = useState([]);  
    return (
        <>
            {todos.map((el) => ( 
                <div className="t1">
                   <div>{el.value}</div>
                   <div><input type="checkbox" /></div>
                </div>
             ))}

            <input className="inpt" value={newTodos} onChange={(e) => setTodo(e.target.value)} placeholder="Enter Item in ToDo" />
            <button className="btn" onClick={() => {
            setTodos([
                ...todos,
                {
                    id:Date.now(),
                    value:newTodos,
                    iscompleted:false
                },
            ]);
            setTodo("")
            }} >+</button>
        </>
    )
}

export {Todo};