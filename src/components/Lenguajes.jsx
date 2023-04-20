import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { puerto } from "../services/GetPuerto";
import Button from "react-bootstrap/Button";

const Lenguajes = () => {
  const [lenguajes, setLenguajes] = useState([]);

  useEffect(() => {
    //cada vez que ocurre un cambio
    usarData();
  }, []);

  const fornivel = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/nivel?nivel=${e}`
    );
    setLenguajes(resp.data);
  };

  const forestado = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/estado?estado=${e}`
    );
    setLenguajes(resp.data);
  };

  const usarData = async () => {
    const resp = await axios.get(`https://localhost:${puerto}/listaLenguajes`);
    setLenguajes(resp.data);
  };

  async function handleOptionEs() {
    const select = document.getElementById("estadoLenguaje");
    const selectOption = select.options[select.selectedIndex].value;

    switch (selectOption) {
      case "Activo":
        forestado("Activo");
        break;
      case "Inactivo":
        forestado("Inactivo");
        break;
    }
  }

  async function handllenguaje() {
    const select = document.getElementById("nivelLenguaje");
    const selectOption = select.options[select.selectedIndex].value;

    switch (selectOption) {
      case "Avanzado":
        fornivel("Avanzado");
        break;
      case "Intermedio":
        fornivel("Intermedio");
        break;
      case "Basico":
        fornivel("Basico");
        break;
    }
  }

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div style={{ width: "1050px", margin: "auto" }}>
          <div style={{ margin: "15px" }}>
            <label>Estado del lenguaje</label>
            <select onChange={handleOptionEs} id="estadoLenguaje">
              <option value={"Activo"}>Activo</option>
              <option value={"Inactivo"}>Inactivo</option>
            </select>
          </div>
          <div style={{ margin: "15px" }}>
            <label>Nivel del lenguaje</label>
            <select onChange={handllenguaje} id="nivelLenguaje">
              <option value={"Avanzado"}>Avanzado</option>
              <option value={"Intermedio"}>Intermedio</option>
              <option value={"Basico"}>Basico</option>
            </select>
          </div>
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
      </div>
      <Table striped bordered hover className="m-5">
        <thead>
          <tr>
            <th>idLenguaje</th>
            <th>tipLeng</th>
            <th>famLeng</th>
            <th>regIdi</th>
            <th>nivFluIdi</th>
            <th>estadIdi</th>
          </tr>
        </thead>

        <tbody>
          {lenguajes.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.idLenguaje}</td>
                <td>{data.tipLeng}</td>
                <td>{data.famLeng}</td>
                <td>{data.regIdi}</td>
                <td>{data.nivFluIdi}</td>
                <td>{data.estadIdi}</td>
              </tr>
            );
          })}
        </tbody>
        <tr></tr>
      </Table>
    </div>
  );
};

export default Lenguajes;
