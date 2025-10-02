import { useState, useEffect } from "react";
import axios from "axios";
import ActressesList from "./components/ActressesList";
import "./App.css";

export default function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    const url = "https://lanciweb.github.io/demo/api/actresses/";

    axios
      .get(url)

      .then((response) => {
        setActresses(response.data || []);
      })
      .catch((error) => console.error("Si è verificato un errore:", error));
  }, []);

  return (
    <div>
      <h1>Attrici</h1>
      <ActressesList actresses={actresses} />
    </div>
  );
}
