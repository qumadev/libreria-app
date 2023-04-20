import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { GetCategorias } from "../services/GetPaises";
import axios from "axios";
import { puerto } from "../services/GetPuerto";
import Button from "react-bootstrap/Button";

const Opiniones = () => {
  const [opiniones, setOpiniones] = useState([]);

  const forFecha = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/fecha?fecha=${e}`
    );
    setOpiniones(resp.data);
  };

  const fortipo = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/tipoopi?tipoopi=${e}`
    );
    setOpiniones(resp.data);
  };

  const usarData = async (e) => {
    const resp = await axios.get(`https://localhost:${puerto}/listaOpiniones`);
    setOpiniones(resp.data);
  };

  async function handleOptionEs() {
    const select = document.getElementById("estadoOpinion");
    const selectOption = select.options[select.selectedIndex].value;

    switch (selectOption) {
      case "positivo":
        fortipo("positivo");
        break;
      case "negativa":
        fortipo("negativa");
        break;
    }
  }

  useEffect(() => {
    usarData();
  }, []);

  return (
    <div>
      <div style={{ width: "1050px", margin: "auto" }}>
        <div style={{ margin: "15px" }}>
          <label>Estado de la opinion</label>
          <select onChange={handleOptionEs} id="estadoOpinion">
            <option value={"positivo"}>positivo</option>
            <option value={"negativa"}>negativa</option>
          </select>
        </div>
        <div>
          <input style={{ width: "200px", margin: "5px" }} id="fechaS" />
          <button
            onClick={() => {
              forFecha(document.getElementById("fechaS").value);
            }}
          >
            Consultar fecha
          </button>
        </div>
        {/*         <div style={{ margin: "15px" }}>
            <label>Nivel del lenguaje</label>
            <select onChange={handllenguaje} id="nivelLenguaje">
              <option value={"Avanzado"}>Avanzado</option>
              <option value={"Intermedio"}>Intermedio</option>
              <option value={"Basico"}>Basico</option>
            </select>
          </div> */}
        <Button
          variant="primary"
          className=""
          style={{ display: "absolute", marginLeft: "80px" }}
          onClick={() => {
            usarData();
          }}
        >
          Eliminar filtro
        </Button>{" "}
      </div>

      <Table striped bordered hover className="m-5">
        <thead>
          <tr>
            <th>idOpinion</th>
            <th>tipoOpi</th>
            <th>comentario</th>
            <th>calificación</th>
            <th>fechaOpi</th>
            <th>producto</th>
          </tr>
        </thead>

        <tbody>
          {opiniones.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.idOpinion}</td>
                <td>{data.tipoOpi}</td>
                <td>{data.comentario}</td>
                <td>{data.calificación}</td>
                <td>{data.fechaOpi}</td>
                <td>{data.producto}</td>
              </tr>
            );
          })}
        </tbody>
        <tr></tr>
      </Table>
    </div>
  );
};

export default Opiniones;
