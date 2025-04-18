import { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState();

    function handleInputChanges(event){
        setnewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() != ""){
        setTasks(t => [...t,newTask]);
        setnewTask("");
        }
    }

    function deleteTask(index){
        const taskUpdate = tasks.filter((_,i) => i != index);
        setTasks(taskUpdate);
    }

    function moveUp(index){
        if (index >0){
            const taskUpdate = [...tasks];
            [taskUpdate[index], taskUpdate[index-1]] = [taskUpdate[index-1], taskUpdate[index]];
            setTasks(taskUpdate);}
    }

    function moveDown(index){
        if (index < tasks.length -1){
            const taskUpdate = [...tasks];
            [taskUpdate[index], taskUpdate[index+1]] = [taskUpdate[index+1], taskUpdate[index]];
            setTasks(taskUpdate);}
        }

    return (<div className="ToDoList">
        <h1>To-Do List</h1>
        <div> 
        <input
            type="text" 
            placeholder="Add a new task" 
            value={newTask}
            onChange={handleInputChanges}/>
        <button className="add-btn" onClick={addTask}>Add</button>
        </div>
        <ol>
             {tasks.map((task,index) =>
            <li key={index}>
            <span className="text">{task}</span>
            <button className="dlt-btn" onClick={()=>{deleteTask(index)}}>Delete</button>
            <button className="move" onClick={()=>{moveUp(index)}}>Up</button>
            <button className="move" onClick={()=>{moveDown(index)}}>Down</button>
            </li>
             )
             }
        </ol>
    </div>
    );
}

export default ToDoList;