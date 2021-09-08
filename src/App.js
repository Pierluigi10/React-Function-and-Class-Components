import "./App.css";
import Activity from "./components/Activity";

function App() {
  return (
    <div className="App">
      <Activity kind="livecoding" />
      <Activity kind="lexplanation" />
      <Activity kind="exercise" />
    </div>
  );
}

export default App;
