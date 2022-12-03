import "./App.css";
import Create from "./components/create";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Create />
        </div>
      </div>
    </div>
  );
}

export default App;
