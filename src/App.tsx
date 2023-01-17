import React from "react";

//styles
import styles from "./App.module.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <h1 className={styles.main}>Conteúdo...</h1>
      <Footer />
    </div>
  );
}

export default App;
