import "./LinkEntry.css";

export default function LinkEntry(props) {
  return (
    <div className="LinkEntry">
      <div className="name">{`${props.name}:`}&nbsp;</div>
      <div className="source"> {props.source} </div>
      <br />
      <div onClick={console.log} className="target">{props.target} </div>
    </div>
  );
}
