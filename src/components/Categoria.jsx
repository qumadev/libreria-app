import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { GetCategorias } from "../services/GetPaises";
import axios from "axios";
import { puerto } from "../services/GetPuerto";
import Button from "react-bootstrap/Button";

const Categoria = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    //cada vez que ocurre un cambio
    usarData();
  }, []);

  const forLetra = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/api/Categorias/letra?letra=${e}`
    );
    setCategorias(resp.data);
  };

  const usarData = async (e) => {
    const resp = await axios.get(
      `https://localhost:${puerto}/api/Categorias/listaCategorias`
    );
    setCategorias(resp.data);
  };

  return (
    <div>
      <div style={{ marginLeft: "150px", marginTop: "50px" }}>
        <label>Tipo de categorias: </label>
        <input
          className="w-25 m-auto "
          onChange={(e) => {
            if (e.target.value.length > 1) {
              forLetra(e.target.value);
            }
          }}
        />
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
        <div>
          <label>Para las edades: </label>
          <input
            className="w-25 m-auto "
            style={{ marginLeft: "50px" }}
            onChange={(e) => {
              if (e.target.value.length > 1) {
                forLetra(e.target.value);
              }
            }}
          />
        </div>
      </div>
      <Table striped bordered hover className="m-5">
        <thead>
          <tr>
            <th>IdCategoria</th>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>

        <tbody>
          {categorias.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.idCategoria}</td>
                <td>{data.nombre}</td>
                <td>{data.descripcion}</td>
              </tr>
            );
          })}
        </tbody>
        <tr></tr>
      </Table>
    </div>
  );
};

export default Categoria;
