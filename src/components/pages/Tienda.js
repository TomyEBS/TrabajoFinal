import React, { useState, useEffect } from 'react';
import { UseFetch } from "../UseFetch";
import './styles/cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 


const Tienda = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductos();
  }, []);

  async function traerProductos() {
    const url = 'https://fakestoreapi.com/products';

    try {
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
      <div>
        <div className="container">
          {productos.map((prod) => (
            <div className="card" style={{ width: '18rem' }} key={prod.id}>
              <img className="card-image" src={prod.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.description}</p>
                <p className="card-subtitle mb-2 text-muted">Precio: {prod.price}</p>
                <p className="card-subtitle mb-2">Categoría: {prod.category}</p>
                <button className="btn btn-primary">Ver producto</button>
              </div>
            </div>
          ))}
        </div>
  </div>
  )}

export default Tienda;
