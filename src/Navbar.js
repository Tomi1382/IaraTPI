import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <img
            src="https://64.media.tumblr.com/97f0748800c2a78c5c71447662ea41e8/tumblr_nje1hsN7pQ1tgzdvbo1_400.jpg"
            className="kuromi"
            alt="Icono"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Link to="/stock">
          {" "}
          <em>Stock</em>{" "}
        </Link>
        <Link to="/carrito">
          {" "}
          <em>Carrito</em>{" "}
        </Link>
      </div>
    );
  }
}
