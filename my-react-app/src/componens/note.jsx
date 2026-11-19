import { useState } from "react"
import "./note.css"
export default function Note({onSave}) {

    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[color,setColor]=useState("Yellow");
    const[error,setError]=useState("");
    
    function handle(e){
        e.preventDefault();
        if(title===""){
            setError("title is requred")
        }else if(content===""){
            setError("Content is required") 
        }else{
            setError("");
        
            const newNote={
                title,
                content,
                color
            };
            onSave(newNote)
        }
       
    }
    

    return (
       <div className="note-form">
            <h2>Create Note</h2>
            <form onSubmit={handle}>
                <input 
                    className="note-title"
                    type="text"
                    placeholder="Enter The Title"
                    value={title}
                    maxLength={100}
                    onChange={(e)=>setTitle(e.target.value)}

                    />
                <textarea
                    placeholder="write your note"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}>
                </textarea>
                <select 
                    className="note-color"
                    value={color}
                    onChange={(e)=>setColor(e.target.value)}
                >
                    <option value="Yellow">Yellow</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Pink">Pink</option>
                </select>
                <button className="save-btn">SAVE</button>
                {error && <h2 className="error">{error}</h2>}
            </form>
        </div>
    )
}

