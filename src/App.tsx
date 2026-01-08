import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Slider from "./components/home/Slider";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Categories } from "./components/home/Categories";
import { MostSold } from "./components/home/MostSold";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider/>
      <Categories/>
      <MostSold/>
      <Footer/>
     
    </BrowserRouter>
  );
}

