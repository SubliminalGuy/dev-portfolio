import FontContainer from "./componentes/FontContainer";
import SideBar from "./componentes/Sidebar";
import BioBar from "./componentes/BioBar";
import "./App.css";
//import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <FontContainer />
      <BioBar />
      <SideBar />
    </div>
  );
}

export default App;
