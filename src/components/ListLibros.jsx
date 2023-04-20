import {React,useEffect,useState} from 'react'
import {GetLibros} from '../services/GetLibros';

export const ListLibros = () => {

  const [libros,setLibros] = useState([])

  useEffect(()=>{ //cada vez que ocurre un cambio
    usarData()
  },[])

  const usarData = async () => {
    const elementos = await GetLibros()
    setLibros(elementos)
  }


  return (
    <div>
      
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>titulo</th>
            <th>descripcion</th>
            <th>año_publicacion</th>
            <th>num_paginas</th>
            <th>precio</th>
            <th>imglnk</th>
          </tr>
        </thead>
        <tbody>
          {
            libros.map((item,indice) => {

              return(
                <tr key={indice}>
                  <td>{item.idLibro}</td>
                  <td>{item.titulo}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.anio_publi}</td>
                  <td>{item.num_paginas}</td>
                  <td>{item.precio}</td>
                  <td>{item.imglnk}</td>
                </tr>
              )

            })
          }
        </tbody>
      </table>

    </div>
  )
}