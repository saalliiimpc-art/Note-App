
import Sidebar from "./componens/Sidebar";
import Notearea from "./componens/createnote";
import { useState,useEffect } from "react";
import "./App.css";


function App() {
  const [allnotes, setAllnotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(allnotes));
  }, [allnotes]);


 

  return (
    <>
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h1> MY NOTES</h1>
        <div>
          <Notearea 
            allnotes={allnotes}
            setAllnotes={setAllnotes}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
