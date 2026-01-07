import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer/>
     
    </BrowserRouter>
  );
}
