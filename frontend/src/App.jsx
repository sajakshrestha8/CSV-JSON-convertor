import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [csvdata, setCsvdata] = useState("");
  const [output, setOutput] = useState([{}]);
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
      <textarea
        type="textfield"
        id="CsvData"
        onChange={(e) => {
          setCsvdata(e.target.value);
        }}
      />
      <button onClick={fetching}>click</button>
      <button onClick={getting}>get data</button>
      <div>{JSON.stringify(output)}</div>
    </>
  );
}
