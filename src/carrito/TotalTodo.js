import React from "react";
import "./styles.css";

export default class TotalTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { eliminarTodo, totalPrecio, totalCantidad } = this.props;
    return (
      <div className="contTotal">
        <div className="Total">
          <span> Cantidad total: {totalCantidad}</span>
          <span> Precio total: {totalPrecio}</span>
          <span className="eliminarTodo" onClick={() => eliminarTodo()}>
            Eliminar todo
          </span>
        </div>
      </div>
    );
  }
}
