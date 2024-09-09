import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar2.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null); // Esto también cierra cualquier dropdown abierto
  };

  return (
    <nav>
      <img src="https://firebasestorage.googleapis.com/v0/b/estilo-pastelero.appspot.com/o/iconoEstiloPast.png?alt=media&token=9f205047-d305-4a5e-90b1-6c898fe76517" alt="icono-svg" className="logo" />
      <div className={`dropdowns ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="dropdown-inicio" onClick={closeMenu}>Inicio</Link>
        
        <div className="dropdown">
          <button className="dropdown-button" onClick={() => toggleDropdown(1)}>
            <span>Productos Dulces</span>
            <i className={`bi bi-chevron-down ${activeDropdown === 1 ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-menu ${activeDropdown === 1 ? 'active' : ''}`}>
            <Link to="/budines" className="link-button list-show" onClick={closeMenu}>Budines</Link>
            <Link to="/panes" className="link-button list-show" onClick={closeMenu}>Panes</Link>
            <Link to="/panaderia" className="link-button list-show" onClick={closeMenu}>Panadería Gral.</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-button" onClick={() => toggleDropdown(2)}>
            <span>Productos Salados</span>
            <i className={`bi bi-chevron-down ${activeDropdown === 2 ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-menu ${activeDropdown === 2 ? 'active' : ''}`}>
            <Link to="/empanadasCrudas" className="link-button" onClick={closeMenu}>Empanadas Crudas</Link>
            <Link to="/empanadasFritas" className="link-button" onClick={closeMenu}>Empanadas Fritas</Link>
            <Link to="/empanadasHorno" className="link-button" onClick={closeMenu}>Empanadas al Horno</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-button" onClick={() => toggleDropdown(3)}>
            <span>Eventos</span>
            <i className={`bi bi-chevron-down ${activeDropdown === 3 ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-menu ${activeDropdown === 3 ? 'active' : ''}`}>
            <Link to="/san-valentin" className="link-button" onClick={closeMenu}>San Valentín</Link>
            <Link to="/pascuas" className="link-button" onClick={closeMenu}>Pascuas</Link>
            {/* <Link to="/dia-del-padre" className="link-button" onClick={closeMenu}>Día del Padre</Link>
            <Link to="/dia-de-la-madre" className="link-button" onClick={closeMenu}>Día de la Madre</Link> */}
            <Link to="/navidad" className="link-button" onClick={closeMenu}>Navidad</Link>
            <Link to="/anio-nuevo" className="link-button" onClick={closeMenu}>Año Nuevo</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-button" onClick={() => toggleDropdown(4)}>
            <span>Postres y Petitte Four</span>
            <i className={`bi bi-chevron-down ${activeDropdown === 4 ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-menu ${activeDropdown === 4 ? 'active' : ''}`}>
            <Link to="/tartas" className="link-button" onClick={closeMenu}>Tartas</Link>
            <Link to="/tortas" className="link-button" onClick={closeMenu}>Tortas</Link>
            <Link to="/mesa-dulce" className="link-button" onClick={closeMenu}>Mesa Dulce</Link>
          </div>
        </div>
      </div>

      <div className="btn-hamb" onClick={toggleMenu}>
        <svg className="hamburguesa" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
