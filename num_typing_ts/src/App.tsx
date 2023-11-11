import NumTyping from "./components/pages/NumTyping";
import Start from "./components/pages/StartMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/numtype/:digit" element={<NumTyping />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
