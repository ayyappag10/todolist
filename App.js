import React,{useState} from "react"
import {render} from "react-dom"

const  App = ()=> {
    
    const [taskList, setTaskList] = useState([])
    const [taskField, setTaskField] = useState("");

    console.log("excute", taskList)
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
        console.log(typeof(e),e)
        setTaskList([...taskList.slice(0,e.target.id),...taskList.slice(e.target.id+1)])
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
                placeHolder="enter new task "
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