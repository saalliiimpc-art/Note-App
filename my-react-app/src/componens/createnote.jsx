import "./createnote.css"
import { useState } from "react"
import Note from "./note"

export default function Notearea(){

    const[shownote,setShownote]=useState(false)
    
    return(
        <div className="notes-area">
            <h3 className="notes-heading">Notes:-</h3>
            <input 
                className="search-box"
                type="text"
                placeholder="search your note"></input>
            <button className="search-btn">🔍</button>
            <br></br>
            <br></br>
            <button 
                className="create-btn" 
                onClick={()=>setShownote(true)}>Create Note
            </button>
            {shownote && <Note />}
        </div>
    )
}