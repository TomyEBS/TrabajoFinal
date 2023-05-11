import React , {useEffect, useState} from "react";
import { UseFetch } from "../UseFetch";
import {Cards} from '../Cards/Cards'


const Tienda = () => {
    const [productos, setProductos] = useState([]);

  React.useEffect(() => {
    traerProductos();
  }, []);

async function traerProductos(){
  const url = 'https://fakestoreapi.com/products'

  
  try {
    const resultado = await fetch(url)
    const respuesta = await resultado.json()
    setProductos(respuesta);


  } catch(error){
    console.log(error)
  }

  


}
return (
  <div>
    {productos.map((prod) => (
      <div className="card" style={{ width: '18rem' }} key={prod.id}>
        <img className="card-img-top" src={prod.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.description}</p>
          <p className="card-subtitle mb-2 text-muted">{prod.price}</p>
          <p className="card-subtitle mb-2 ">{prod.category}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    ))}
  </div>
);
};


export default Tienda;
