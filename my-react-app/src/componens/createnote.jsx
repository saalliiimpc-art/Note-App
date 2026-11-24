import "./createnote.css"
import { useState } from "react"
import Note from "./note"

export default function Notearea({allnotes,setAllnotes}){

    const[shownote,setShownote]=useState(false)
    const [selectedNote, setSelectedNote] = useState(null);


    function handleSave(newNote){
        setAllnotes([...allnotes,newNote])
        setShownote(false)
    }
    function deletenote(index){
        let a=[...allnotes]
        a.splice(index,1)
        setAllnotes(a)
    }
    
    return(
        <div className="notes-area">
            <div className="search-box">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search your note"
                />
                <button className="search-btn">🔍</button>
            </div>
            <button
                className="create-btn"
                onClick={() => setShownote(true)}>
            Create Note</button>


            {shownote && <Note onSave={handleSave} />}
            
            <h3 className="notes-heading">Notes:-</h3>
            <div className="notes-list" >
                {allnotes.map((n, index) => (
                    <div key={index} className="single-note">
                        <h2 onClick={() => setSelectedNote(n)}>{n.title}</h2>

                        {selectedNote === n && (
                            <div>
                                <h3>{n.content}</h3>
                                <h4>{n.color}</h4>
                                <button 
                                    onClick={() => setSelectedNote(null)}
                                    className="close-btn">
                                    Close
                                </button>
                                <button 
                                    onClick={deletenote}
                                    className="delete-button"
                                    >Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}