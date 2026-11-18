
import "./note.css"
export default function Note() {
    return (
       <div className="note-form">
            <h2>Create Note</h2>
            <input className="note-title"
                type="text"
                placeholder="Enter The Title" 
            />
            <textarea 
                name="" 
                id=""
                placeholder="write your note">
            </textarea>
            <select className="note-color">
                <option>Yellow</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Pink</option>
            </select>
            <button className="save-btn">SAVE</button>
        </div>
    )
        
}