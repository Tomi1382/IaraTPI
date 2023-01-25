import React from "react";
import "./styles.css";

class ListaProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      nombre,
      descripcion,
      precio,
      categoria,
      cantidad,
      eliminar
    } = this.props;
    return (
      <div className="producto">
        <span className="Eliminar" onClick={() => eliminar()}>
          X
        </span>
        <span>Nombre: {nombre} </span>
        <span>Descripcion: {descripcion} </span>
        <span>Precio: {precio} </span>
        <span>Categoria: {categoria} </span>
        <span>Cantidad: {cantidad} </span>
        <span>Total: {precio * cantidad} </span>
      </div>
    );
  }
}
export default class productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { productos, eliminar } = this.props;
    return (
      <div className="ListaProductos">
        {productos.map((item, index) => {
          return (
            <ListaProductos
              key={index}
              eliminar={() => eliminar(index)}
              nombre={item.nombre}
              descripcion={item.descripcion}
              categoria={item.categoria}
              precio={item.precio}
              cantidad={item.cantidad}
            />
          );
        })}
      </div>
    );
  }
}
