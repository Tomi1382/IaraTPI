import React from "react";
import "./styles.css";
import ListaProductos from "../stock/ListaProductos";
import Stock from "../stock/Main";
import App from "../App";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      nombre: "",
      descripcion: "",
      categoria: "",
      precio: "",
      cantidad: ""
    };
  }
  render() {
    const {
      nombre,
      descripcion,
      precio,
      categoria,
      cantidad,
      agregar
    } = this.props;
    return (
      <div className="padre">
        <div className="contBuscador">
          <div className="der">
            <select
              name="Categoria"
              id="cat"
              value={categoria}
              onChange={(e) => this.setState({ categoria: e.target.value })}
            >
              <option id="0" value="sin_cate">
                Sin Categoria
              </option>
              <option id="1" value="bebidas">
                bebidas
              </option>
              <option id="2" value="limpieza">
                Limpieza
              </option>
              <option id="3" value="lacteos">
                Lacteos
              </option>
              <option id="4" value="bazar">
                Bazar
              </option>
            </select>
          </div>
        </div>

        <div className="menu">
          &nbsp; &nbsp;
          <div className="contCategorias"></div>
          <div className="contProductos">
            <div className="producto">
              <span>Nombre: {nombre} </span>
              <span>Descripcion: {descripcion} </span>
              <span>Precio: {precio} </span>
              <span>Categoria: {categoria} </span>
              <span>Cantidad: {cantidad} </span>
              <span>Total: {precio * cantidad} </span>
              <span
                className="Agregar" //onClick={() => agregar()}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
