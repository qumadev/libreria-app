import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ListClientes } from "./components/ListClientes";
import { ListPaises } from "./components/ListPaises";
import Header from "./components/Header";
import Categoria from "./components/Categoria";
import Carritos from "./components/Carritos";
import Lenguajes from "./components/Lenguajes";
import Opiniones from "./components/Opiniones";
import { ListLibros } from "./components/ListLibros";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/clientes" element={<ListClientes />} />
        </Routes>
        <Routes>
          <Route path="/paises" element={<ListPaises />} />
        </Routes>
        <Routes>
          <Route path="/categorias" element={<Categoria />} />
        </Routes>
        <Routes>
          <Route path="/carritos" element={<Carritos />} />
        </Routes>
        <Routes>
          <Route path="/paises" element={<ListPaises />} />
        </Routes>
        <Routes>
          <Route path="/lenguajes" element={<Lenguajes />} />
        </Routes>
        <Routes>
          <Route path="/opiniones" element={<Opiniones />} />
        </Routes>
        <Routes>
          <Route path="/libros" element={<ListLibros />} />
        </Routes>

      </main>
    </Router>
  );
}

export default App;

/* <div className="bg-dark d-flex align-items-center justify-content-center">
          <div className="container-fluid bg-light vh-100 app">
            <div className="row d-flex justify-content-center align-items-center">



            </div>
          </div>
        </div> */
