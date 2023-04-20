export const GetClientes = async () => {
  const data = await fetch('https://localhost:44323/api/Cliente/listarClientes');
  const elementos = await data.json();
  return elementos;
};