import React, { Component } from "react";
import Header from "./componentes/Header";
import AgregarCita from "./componentes/agregarCita";
import ListadoCitas from "./componentes/ListadoCitas";
class App extends Component {
  state = { citas: [] };

  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) this.setState({ citas: JSON.parse(citasLS) });
  }

  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearCita = nuevaCita => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({ citas });
    console.log(citas);
  };

  borrarCita = id => {
    console.log(id);
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(x => x.id !== id);
    this.setState({ citas });
  };

  render() {
    return (
      <div className="container">
        <Header titulo={"Bursoft Citas"} />

        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>

          <div className="col-md-6">
            <ListadoCitas
              borrarCita={this.borrarCita}
              citas={this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
