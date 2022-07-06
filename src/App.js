import Pages from "./pages/Pages";

import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
