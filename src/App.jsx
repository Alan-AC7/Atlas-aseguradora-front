import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Repuesto from "./Pages/Repuesto";
import Tienda from "./Pages/Tienda";
import Envio from "./Pages/Envios";
import Sucursal from "./Pages/Sucursales"
import Asegurados from "./Pages/ClientesAsegurados";
import Home from "./Pages/Inicio";

function App (){
  return(
    <div className="">
     
      <Router>
      <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
<Route path="/repuesto" element={<Repuesto></Repuesto>}></Route>
<Route path="/tienda" element={<Tienda></Tienda>}></Route>
<Route path="/envio" element={<Envio></Envio>}></Route>
<Route path="/sucursal" element={<Sucursal></Sucursal>}></Route>
<Route path="/asegurados" element={<Asegurados></Asegurados>}></Route>



        </Routes>
      </Router>

      
    </div>
  )
}

export default App;
