import logo from "./logo.svg";
import "./App.css";
import Link from "./LinkEntry";
import data from "./data.json";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      {data.links.map((link) => (
        <Link name={link.name} source={link.source} target={link.target} />
      ))}
    </div>
  );
}

export default App;
