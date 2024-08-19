export default function CsvEntry(props) {
  return (
    <>
      <textarea
        name={props.name}
        id={props.id}
        onChange={props.change}
      ></textarea>
    </>
  );
}
