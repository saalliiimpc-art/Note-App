
import Sidebar from "./componens/Sidebar";
import Notearea from "./componens/createnote";


function App() {
 

  return (
    <>
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h1> MY NOTES</h1>
        <div>
          <Notearea />
          
        </div>
      </div>
      

    </div>
    
    
     
    
      
    </>
  )
}

export default App
