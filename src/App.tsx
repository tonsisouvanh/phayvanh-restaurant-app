import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/login" element={<Login />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
