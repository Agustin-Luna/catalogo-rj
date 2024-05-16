import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../../assets/iconoEstiloPast.png';
import './Navbar2.css';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [abrirMenu, setAbrirMenu] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenu = () =>{
    setAbrirMenu(!abrirMenu)
    console.log(handleMenu)
  }


  return (
    <nav>
      <img src={Icon} alt="icono-svg" className="logo" />
      <div className={`dropdowns ${menuOpen ? 'show' : ''}`}>
        {/* inicio*/}
        <Link to="/" className="dropdown-inicio">Inicio</Link>
        {/* primer menu */}
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleMenu}>
            <span>Productos Dulces</span>
            <i className="bi bi-chevron-down"></i>
            </button>
            <div className={`dropdown-menu ${handleMenu ? 'active' : 'close'}`}>
            <Link to="/budines" className="link-button list-show">Budines</Link>
            <Link to="/panes" className="link-button list-show">Panes</Link>
            <Link to="/panaderia" className="link-button list-show">Panaderia Gral.</Link>
          </div>
        </div>
        {/* segundo menu */}
        <div className="dropdown">
          <button className="dropdown-button click-button" >
            <span>Productos Salados</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <Link to="/empanadasCrudas" className="link-button">Empanadas Crudas</Link>
            <Link to="/empanadasFritas" className="link-button">Empanadas Fritas</Link>
            <Link to="/empanadasHorno" className="link-button">Empanadas al Horno</Link>
          </div>
        </div>
        {/* tercer menu */}
        <div className="dropdown">
          <button className="dropdown-button click-button">
            <span>Eventos</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <Link to="/san-valentin" className="link-button">San Valentín</Link>
            <Link to="/pascuas" className="link-button">Pascuas</Link>
            <Link to="/dia-del-padre" className="link-button">Día del Padre</Link>
            <Link to="/dia-de-la-madre" className="link-button">Día de la Madre</Link>
            <Link to="/navidad" className="link-button">Navidad</Link>
            <Link to="/anio-nuevo" className="link-button">Año Nuevo</Link>
          </div>
        </div>
        {/* cuarto menu */}
        <div className="dropdown">
          <button className="dropdown-button click-button">
            <span>Mesa Dulce</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <Link to="/tartas" className="link-button">Tartas</Link>
            <Link to="/tortas" className="link-button">Tortas</Link>
            <Link to="/mesa-dulce" className="link-button">Mesa Dulce</Link>
          </div>
        </div>
        {/* btn hamburguesa */}
      </div>
      <div className='btn-hamb' onClick={toggleMenu}>
        <svg className="hamburguesa" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
    </nav>
  );
};


export default Navbar;