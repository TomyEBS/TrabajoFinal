import React , {useEffect, useState} from "react";
import { UseFetch } from "../UseFetch";
import './styles/cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap'; 


const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

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

  async function verProducto(id) {
    const url = `https://fakestoreapi.com/products/${id}`;

    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setProductoSeleccionado(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  const closeModal = () => {
    setProductoSeleccionado(null);
  };

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
              <button onClick={() => verProducto(prod.id)} className="btn btn-primary">Ver producto</button>
            </div>
          </div>
        ))}
      </div>

      <Modal show={productoSeleccionado !== null} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productoSeleccionado && (
            <div>
              <h2>{productoSeleccionado.title}</h2>
              <p>{productoSeleccionado.description}</p>
              <p>Precio: {productoSeleccionado.price}</p>
              <p>Categoría: {productoSeleccionado.category}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Tienda;
