
import Sidebar from "./componens/Sidebar";
import Notearea from "./componens/createnote";
import { useState } from "react";

function App() {
  const[allnotes,setAllnotes]=useState([])

 

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
