import React from "react";
import Formulario from "./Formulario";
import ListaProductos from "./ListaProductos";
import TotalTodo from "../carrito/TotalTodo";
import "./styles.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      totalPrecio: 0,
      totalCantidad: 0
    };
  }
  Formulario() {
    let { mostrarformulario } = this.state;
    if (mostrarformulario === false) {
      mostrarformulario = true;
    } else {
      mostrarformulario = false;
    }
    this.setState({ mostrarformulario });
  }
  getTotal() {
    let { productos } = this.state;
    const totalPrecio = productos.reduce((acu, act) => acu + act.total, 0);
    const totalCantidad = productos.reduce(
      (acu, act) => acu + Number(act.cantidad),
      0
    );
    this.setState({ totalCantidad, totalPrecio });
  }
  guardar(datos) {
    let { productos } = this.state;
    productos.push(datos);
    this.setState({ productos });
    this.getTotal();
  }
  eliminar(index) {
    let { productos } = this.state;
    productos.splice(index, 1);
    this.setState({ productos });
    setTimeout(() => {
      this.getTotal();
    }, 200);
  }
  eliminarTodo() {
    let { productos } = this.state;
    productos.splice(0, productos.length);
    this.setState({ productos });
    setTimeout(() => {
      this.getTotal();
    }, 200);
  }
  render() {
    let { mostrarformulario } = this.state;
    return (
      <div className="cont_boton">
        <div className="tarea">
          <span className="NuevaTarea" onClick={() => this.Formulario()}>
            <i>Nueva tarea</i>
          </span>
        </div>
        <div className="Padre">
          <div className="contTotal">
            <Formulario guardar={(datos) => this.guardar(datos)} />
          </div>
          <ListaProductos
            eliminar={(index) => this.eliminar(index)}
            productos={this.state.productos}
          />
        </div>
      </div>
    );
  }
}
