import {React,useEffect,useState} from 'react'
import {GetPaises} from '../services/GetPaises';

export const ListPaises = () => {

  const [paises,setPaises] = useState([])

  useEffect(()=>{ //cada vez que ocurre un cambio
    usarData()
  },[])

  const usarData = async () => {
    const elementos = await GetPaises()
    setPaises(elementos)
  }


  return (
    <div>
      
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pais</th>
            <th>ISO</th>
            <th>Continente</th>
            <th>Idioma</th>
            <th>Moneda</th>
            <th>Huso</th>
          </tr>
        </thead>
        <tbody>
          {
            paises.map((item,indice) => {

              return(
                <tr key={indice}>
                  <td>{item.paisId}</td>
                  <td>{item.nomPais}</td>
                  <td>{item.codIso}</td>
                  <td>{item.continente}</td>
                  <td>{item.idioma}</td>
                  <td>{item.moneda}</td>
                  <td>{item.husoHorario}</td>
                </tr>
              )

            })
          }
        </tbody>
      </table>

    </div>
  )
}
