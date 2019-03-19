import React, { Component } from "react";
import Cita from "./Citas";

class ListaCitas extends Component {
  state = {};

  render() {
    const citas = this.props.citas;
    const mensaje =
      Object.keys(citas).length === 0
        ? "Agrega una cita aqui"
        : "Listado de citas";
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(this.props.citas).map(x => (
              <Cita
                key={x}
                info={this.props.citas[x]}
                borrarCita={this.props.borrarCita}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaCitas;
