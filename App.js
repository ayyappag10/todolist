import React,{useState} from "react"
import {render} from "react-dom"

const  App = ()=> {
    
    const [taskList, setTaskList] = useState([])
    const [taskField, setTaskField] = useState("");

    function handleTaskFieldChange(e){
        setTaskField(e.target.value);
    }

    function handleAddClick(){
        if(taskField){
             setTaskList([...taskList, taskField])
             setTaskField("")
        }
    }

    function removeButtonHandler(e){
        var i = e.target.id;
        const updatedTasks = [...taskList];
        updatedTasks.splice(i,1);
        setTaskList(updatedTasks);
  }

    return(
        <div>
            <div>
               <b> TO DO LIST</b>
            </div>
            <div 
            className= "inputAdd">
                <input
                value={taskField}
                placeholder="enter new task "
                onChange = {handleTaskFieldChange} >
                </input>
                <button                
                onClick = {handleAddClick}
                >
                    Add +
                </button>
            </div>
            {
            taskList.map((element,index) =>  {
                console.log("repaint list", taskList)
                return(
                <div
                className="listItem"
                key={index}>
                <span>{index + 1}. {element}</span>
                <button
                key={index}
                id={index}
                onClick={removeButtonHandler}
                >
                    remove
                </button>
            </div>)
            
                })
            }
        </div>
    )
}

render(<App/>, document.getElementById("root"))