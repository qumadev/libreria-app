import {puerto} from './GetPuerto';

export const GetClientes = async () => {
  const data = await fetch(`https://localhost:${puerto}/api/Cliente/listarClientes`);
  const elementos = await data.json();
  return elementos;
};