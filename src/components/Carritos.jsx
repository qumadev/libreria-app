import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { GetCategorias } from "../services/GetPaises";
import axios from "axios";
import { puerto } from "../services/GetPuerto";
import Button from "react-bootstrap/Button";

const Carritos = () => {
  const [carrito, setCarritos] = useState([]);

  useEffect(() => {
    //cada vez que ocurre un cambio
    usarData();
  }, []);

  const forUp = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/api/Carritoes/TopUp`
    );
    setCarritos(resp.data);
  };

  const forDown = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/api/Carritoes/TopDown`
    );
    setCarritos(resp.data);
  };

  const usarData = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/api/Carritoes/listarCarrito`
    );
    setCarritos(resp.data);
  };

  async function handleOptionEs() {
    const select = document.getElementById("estadoCarrito");
    const selectOption = select.options[select.selectedIndex].value;

    switch (selectOption) {
      case "Mayor":
        forUp();
        break;
      case "Menor":
        forDown();
        break;
    }
  }

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div style={{ width: "1050px", margin: "auto" }}>
          <div style={{ margin: "15px" }}>
            <label>Ordenar por: </label>
            <select onChange={handleOptionEs} id="estadoCarrito">
              <option value={"Mayor"}>Mayor</option>
              <option value={"Menor"}>Menor</option>
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
            <th>idCarrito</th>
            <th>cantidad</th>
            <th>precioTotal</th>
          </tr>
        </thead>

        <tbody>
          {carrito.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.idCarrito}</td>
                <td>{data.cantidad}</td>
                <td>{data.precioTotal}</td>
              </tr>
            );
          })}
        </tbody>
        <tr></tr>
      </Table>
    </div>
  );
};

export default Carritos;
