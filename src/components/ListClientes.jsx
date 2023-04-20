import {React,useEffect,useState} from 'react'
import {GetClientes} from '../services/GetClientes';

export const ListClientes = () => {

  const [clientes,setClientes] = useState([])

  useEffect(()=>{ //cada vez que ocurre un cambio
    usarData()
  },[])

  const usarData = async () => {
    const elementos = await GetClientes()
    setClientes(elementos)
  }


  return (
    <div>
      
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>DNI</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Pais</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map((item,indice) => {

              return(
                <tr key={indice}>
                  <td>{item.idCliente}</td>
                  <td>{item.nomCliente}</td>
                  <td>{item.dni}</td>
                  <td>{item.correo}</td>
                  <td>{item.telefono}</td>
                  <td>{item.direccion}</td>
                  <td>{item.nomPais}</td>
                </tr>
              )

            })
          }
        </tbody>
      </table>

    </div>
  )
}
