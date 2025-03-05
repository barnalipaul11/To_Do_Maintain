import React,{useState} from "react"

function ToDoList(){
    const [tasks,setTask]=useState(["Eat Breakfast","Doing Leetcode"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
            const updateTasks = tasks.filter((element,i)=> i!==index)
            setTask(updateTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index - 1]]= [updateTasks[index- 1],updateTasks[index ]];
            setTask(updateTasks);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index + 1]]= [updateTasks[index+ 1],updateTasks[index ]];
            setTask(updateTasks);
        }
    }

    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter your task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={()=>deleteTask(index)}
                        >
                        Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskUp(index)}
                        >
                        ☝️
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskDown(index)}
                        >
                        👇
                        </button>
                    </li>
                )}
            </ol>

        </div>
    );
}
export default ToDoList