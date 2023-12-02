import { HashRouter, Route, Routes } from "react-router-dom";
import NumTyping from "./components/pages/NumTyping";
import Start from "./components/pages/StartMenu";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route index element={<Start />} />
          <Route path="/numtype/" element={<NumTyping />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
