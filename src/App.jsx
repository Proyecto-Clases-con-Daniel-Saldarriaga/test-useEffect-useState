import Layout from "layouts/Layout";
import Cliente from "pages/Cliente";
import Ventas from "pages/Ventas";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<Layout><div><Cliente/></div></Layout>} />
          <Route path="/ventas" element={<Layout><div><Ventas/></div></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;