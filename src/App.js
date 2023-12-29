import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResourceList from "./components/ResourceList.jsx";
import ResourceDetail from "./components/ResourceDetail.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResourceList />} />
          <Route path="/detail" element={<ResourceDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
