import { puerto } from "./GetPuerto";

export const GetPaises = async () => {
  const data = await fetch(`https://localhost:${puerto}/api/Pais/listarPaises`);
  const elementos = await data.json();
  return elementos;
};

export const GetCategorias = async () => {
  const data = await fetch(
    `http://localhost:${puerto}/api/Categorias/listaCategorias`
  );
  const elementos = await data.json();
  return elementos;
};

//https://localhost:44351/api/Pais/listarPaises
