import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"



function App() {
 

  return (
    <div>
    <div>
    <Navbar></Navbar>
    </div>
    <div className='mx-auto bg-background'>
      <Outlet />
    </div>
    {/* <div>
      <Footer/>
    </div> */}
  </div>
  )
}

export default App
