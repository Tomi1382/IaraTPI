import React from "react";
import { Link } from "react-router-dom";

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { ruta, titulo } = this.props;
    return (
      <Link to={ruta}>
        <span className="Boton">{titulo}</span>
      </Link>
    );
  }
}
