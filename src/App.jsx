import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ListClientes } from "./components/ListClientes";
import { ListPaises } from './components/ListPaises';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/clientes" element={<ListClientes/>} />
        </Routes>
        <Routes>
          <Route path="/paises" element={<ListPaises/>} />
        </Routes>
      </main>
    </Router>
  );
}


export default App

        /* <div className="bg-dark d-flex align-items-center justify-content-center">
          <div className="container-fluid bg-light vh-100 app">
            <div className="row d-flex justify-content-center align-items-center">



            </div>
          </div>
        </div> */