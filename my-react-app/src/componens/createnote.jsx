import "./createnote.css"
import { useState } from "react"
import Note from "./note"

export default function Notearea({allnotes,setAllnotes}){

    const[shownote,setShownote]=useState(false)

    function handleSave(newNote){
        setAllnotes([...allnotes,newNote])
        setShownote(false)
    }
    
    return(
        <div className="notes-area">
            <h3 className="notes-heading">Notes:-</h3>

            <div>
                {allnotes.map((n,index)=>(
                    <div key={index} className="single-note">
                        <h2>{n.title}</h2>
                        <h3>{n.content}</h3>
                        <h4>{n.color}</h4>
                    </div>
                ))}

            </div>

            <div className="search-box">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search your note"
                />
                <button className="search-btn">🔍</button>
            </div>
            <br></br>
            <button
                className="create-btn"
                onClick={()=>setShownote(true)}
            >Create Note</button>
            {shownote && <Note onSave={handleSave} />}
        </div>
    )
}