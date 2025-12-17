import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import SHA256Section from "./components/SHA256Section/SHA256Section";
import SHA1Section from "./components/SHA1Section/SHA1Section";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-body">
        <SideMenu />

        <Routes>
          <Route path="/sha1" element={<SHA1Section />} />
          <Route path="/sha256" element={<SHA256Section />} />
          <Route path="/" element={<p>Please select</p>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
