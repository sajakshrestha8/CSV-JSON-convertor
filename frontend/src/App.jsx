import axios from "axios";
import "./CSS/index.css";
import { useEffect } from "react";
import { useState } from "react";
import CsvEntry from "./assets/Components/CsvEntry";
import JsonOutput from "./assets/Components/JsonOutput";

export default function App() {
  const [csvdata, setCsvdata] = useState("");
  const [output, setOutput] = useState([]);
  const url = "http://localhost:8000/";

  async function fetching() {
    const sendData = await axios
      .post(url, { data: csvdata })
      .then((value) => {
        console.log(value);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function getting() {
    const getData = await axios
      .get(url)
      .then((data) => {
        console.log(data.data);
        setOutput(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetching();
    getting();
  }, []);
  return (
    <>
      <CsvEntry
        name={"CsvData"}
        id={"CsvData"}
        change={(e) => {
          setCsvdata(e.target.value);
        }}
      />
      <JsonOutput />
      <button onClick={fetching}>click</button>
      <button onClick={getting}>get data</button>
      <div className="output">{JSON.stringify(output)}</div>
    </>
  );
}
