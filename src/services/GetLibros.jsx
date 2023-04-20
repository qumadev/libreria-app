import {puerto} from './GetPuerto';

export const GetLibros = async () => {
  const data = await fetch(`https://localhost:${puerto}/api/Libroes/Listar_libros`);
  const elementos = await data.json();
  return elementos;
};