import React, { Component } from "react";
import PropTypes from "prop-types";

class Cita extends Component {
  state = {};
  eliminaCita = cita => {
    this.props.borrarCita(this.props.info.id);
  };
  render() {
    const { mascota, propietario, fecha, hora, sintomas } = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{mascota}</h3>
          <p className="card-text">
            <span>Nombre del Due;o: {propietario}</span>
          </p>
          <p className="card-text">
            <span>Fecha: {fecha}</span>
          </p>
          <p className="card-text">
            <span>Hora: {hora}</span>
          </p>
          <p className="card-text">
            <span>Sintomas: {sintomas}</span>
          </p>
          <button className="btn btn-danger" onClick={this.eliminaCita}>
            Borrar
          </button>
        </div>
      </div>
    );
  }
}
Cita.propTypes = {
  info: PropTypes.shape({
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};
export default Cita;
