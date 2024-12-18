import { useState } from "react";
import "./App.css";
import BasicForms from "./components/BasicForms";
import AdvancedForm from "./components/AdvancedForms";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "#000", cursor: "pointer" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "#000", cursor: "pointer" }}
        >
          Advanced
        </h3>
      </nav>
      <div>
        {view === "basic" ? <BasicForms /> : <AdvancedForm />}
      </div>
    </div>
  );
}

export default App;
