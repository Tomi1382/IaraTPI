import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Stock from "./stock/Main";
import Index from "./index/Main";
import "./styles.css";
import Carrito from "./carrito/Carrito";
import CarritoVacio from "./carrito/CarritoVacio";
import CardCarrito from "./carrito/CardCarrito";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Contenedor">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/index" element={<index />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </div>
    );
  }
}
