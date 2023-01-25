import React from "react";
import "./styles.css";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      categoria: "",
      precio: "",
      cantidad: "",
      total: ""
    };
  }
  guardar() {
    const datos = {
      nombre: this.state.nombre,
      categoria: this.state.categoria,
      precio: this.state.precio,
      cantidad: this.state.cantidad,
      total: this.state.cantidad * this.state.precio
    };

    this.props.guardar(datos);
    this.setState({
      nombre: "",
      categoria: "",
      precio: "",
      cantidad: "",
      total: ""
    });
  }
  render() {
    const { nombre, precio, categoria, cantidad } = this.state;
    return (
      <div className="contFormulario">
        <div className="Formulario">
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
          <div className="desple">
            <span>Categoria:</span>
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

          <input
            className="input"
            type="number"
            placeholder="Precio/Unidad"
            value={precio}
            onChange={(e) => this.setState({ precio: e.target.value })}
          />
          <input
            className="input"
            type="number"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => this.setState({ cantidad: e.target.value })}
          />
          <span className="Guardar" onClick={() => this.guardar()}>
            Guardar
          </span>
        </div>
      </div>
    );
  }
}
