import "./App.css";
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Carrusel from "./components/Carousel/Carousel.jsx";





const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<ItemLIstContainer/>}/>
          <Route path="/:categoryId" element={<ItemLIstContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;