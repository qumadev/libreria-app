export const GetPaises = async () => {
  const data = await fetch('https://localhost:44323/api/Pais/listarPaises');
  const elementos = await data.json();
  return elementos;
};