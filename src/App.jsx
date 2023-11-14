import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Repuesto from "./Pages/Repuesto";
import Tienda from "./Pages/Tienda";
import Envio from "./Pages/Envios";

function App (){
  return(
    <div className="">
     
      <Router>
      <Navbar></Navbar>
        <Routes>
<Route path="/repuesto" element={<Repuesto></Repuesto>}></Route>
<Route path="/tienda" element={<Tienda></Tienda>}></Route>
<Route path="/envio" element={<Envio></Envio>}></Route>


        </Routes>
      </Router>
    </div>
  )
}

export default App;
