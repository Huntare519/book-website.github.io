import "./App.css";
import TitleName from "./components/TitleName";
import FooterText from "./components/Footer";
import MaterialAuto from "./components/MaterialAuto";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <TitleName />
      <MaterialAuto />
      <FooterText />
    </div>
  );
}

export default App;
