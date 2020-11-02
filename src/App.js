import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Inicio from "components/Inicio";
import Footer from "components/Footer";
import Trabajo from "components/Trabajo";
import Sobremi from "components/Sobremi";
import Habilidades from "components/Habilidades";
import Contacto from "components/Contacto";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/habilidades">
            <Habilidades />
          </Route>
          <Route path="/sobremi">
            <Sobremi />
          </Route>
          <Route path="/mitrabajo">
            <Trabajo />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
