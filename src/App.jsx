import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";




const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ItemLIstContainer />}/>
          <Route path="/:categoryId" element={<ItemLIstContainer/>}/>
          <Route path="/item/:itemId" element={ItemLIstContainer}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;