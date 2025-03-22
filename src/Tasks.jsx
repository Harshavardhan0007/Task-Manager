import "./index.css";
import {useState} from "react"

export default function Tasks(){
    const [input,setInput] = useState("");
    const [task,setTask] = useState([])
    const[isEdited,setEdited] = useState(null);
    function handleClick(){
        if(input.trim() === "") return;
        if(isEdited !== null){
            const updatedTasks = [...task]
            updatedTasks[isEdited] = input;
            setTask(updatedTasks)
            setEdited(null)
        }else{
            setTask([...task,input])
            }
        setInput("")

    }
    function handleDelete(index){
        setTask(task.filter((_,i)=> i !== index))


    }
    function handleEdit(index){
        setEdited(index)
        setInput(task[index])
        

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96 ">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Task Manager</h1>
            <div className="flex gap-2 mb-4">
                <input
                className="border p-2 rounded-lg flex-grow outline-none focus:ring-2 focus:ring-blue-400"
                 type="text"
                 placeholder="List tasks"
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                
                />
            <div>
                <button
                 onClick={handleClick}
                 className={`px-4 py-2 rounded-lg font-semibold text-white transition ${isEdited !== null ? "bg-green-500 hover:bg-green-400":"bg-blue-500 hover:bg-blue-400"}`}>{isEdited !== null ?"Update":"Add"}</button>
            </div>
            </div>
            <ul  className="space-y-2">
            {
                task.map((todo,index)=>(
                    <li className="flex justify-between items-center bg-gray-200 p-2 rounded-lg shadow-sm" key={index}>
                        <span className="text-gray-700">{todo}</span>
                    <button onClick={()=>handleDelete(index)} className="bg-yellow-400 hover:bg-yellow-300 px-3  py-1 rounded-lg">Delete</button>
                    <button onClick={()=>handleEdit(index)} className="bg-red-500 hover:bg-red-400 px-3 text-white py-1 rounded-lg ">Edit</button>
                    </li>
                ))
            }
            </ul>
            </div>
        </div>
            
      
       
    )

}