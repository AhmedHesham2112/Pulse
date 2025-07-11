import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import Landing from "./pages/Landing.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
