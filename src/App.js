import React from "react";
import Header from "components/Header";
import Inicio from "components/Inicio";
import Footer from "components/Footer";
import Trabajo from "components/Trabajo";

function App() {
  return (
    <>
      <Header />
      <main>
        <Trabajo />
      </main>
      <Footer />
    </>
  );
}

export default App;
