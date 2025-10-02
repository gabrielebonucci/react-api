import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    const url = "https://lanciweb.github.io/demo/api/actresses/";

    axios
      .get(url)

      .then((response) => {
        console.log("dati recuperati dall'api", response.data);
        setActresses(response.data.actresses);
      });
  }, []);

  return (
    <div>
      <h1>Attrici</h1>
    </div>
  );
}
