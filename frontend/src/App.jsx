import axios from "axios";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const url = "http://localhost:8000/";

  async function fetching() {
    const sendData = await axios
      .post(url, data)
      .then((value) => {
        console.log(value);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <textarea
        type="textfield"
        id="CsvData"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={fetching}>click</button>
      <div>Sajak Shrestha mero nam ho</div>
    </>
  );
}
