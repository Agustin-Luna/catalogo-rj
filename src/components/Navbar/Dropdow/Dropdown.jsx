import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const ProductosDropdown = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const toggleDropdown1 = () => setDropdown1(!dropdown1);
  const toggleDropdown2 = () => setDropdown2(!dropdown2);
  const toggleDropdown3 = () => setDropdown3(!dropdown3);
  const toggleDropdown4 = () => setDropdown4(!dropdown4);

  return (
    <div className="flex flex-row gap-6 pr-20 relative z-10">
      <div>
        <Link to="/" className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none bg-orange-100">Menú Principal</Link>
      </div>
      <div className="relative text-left">
        <div>
          <button
            onClick={toggleDropdown1}
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none bg-orange-100"
            id="menu-button-1"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Productos Dulces
          </button>
        </div>
        {dropdown1 && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-orange-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button-1"
          >
            <div className="py-1" role="none">
              <Link
                to="tartas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Tartas
              </Link>
              <Link
                to="/tortas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Tortas
              </Link>
              <Link
                to="/alfajores"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Alfajores
              </Link>
              <Link
                to="/budines"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Budines
              </Link>
              <Link
                to="/muffins"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Muffins
              </Link>
              <Link
                to="/dulces-varios"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Dulces Varios
              </Link>
              <Link
                to="/pendiente"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown1(false)}
              >
                Pendiente
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="relative text-left">
        <div>
          <button
            onClick={toggleDropdown2}
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-orange-100 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button-2"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Productos Salados
          </button>
        </div>
        {dropdown2 && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-orange-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button-2"
          >
            <div className="py-1" role="none">
              <Link
                to="/empanadasCrudas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown2(false)}
              >
                Empanadas Crudas
              </Link>
              <Link
                to="/empanadasFritas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown2(false)}
              >
                Empanadas Fritas
              </Link>
              <Link
                to="/empanadasHorno"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown2(false)}
              >
                Empanadas al Horno
              </Link>
              <Link
                to="/panes"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown2(false)}
              >
                Panes
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="relative text-left">
        <div>
          <button
            onClick={toggleDropdown3}
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-orange-100 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button-3"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Eventos
          </button>
        </div>
        {dropdown3 && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-orange-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button-3"
          >
            <div className="py-1" role="none">
              <Link
                to="/san-valentin"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown3(false)}
              >
                San Valentín
              </Link>
              <Link
                to="/pascuas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown3(false)}
              >
                Pascuas
              </Link>
              <Link
                to="/dia-del-padre"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown3(false)}
              >
                Día del Padre
              </Link>
              <Link
                to="/dia-de-la-madre"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown3(false)}
              >
                Día de la Madre
              </Link>
              <Link
                to="/navidad"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown3(false)}
              >
                Navidad
              </Link>
              <Link
                to="/ano-nuevo"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown3(false)}
              >
                Año Nuevo
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="relative text-left">
        <div>
          <button
            onClick={toggleDropdown4}
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-orange-100 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button-4"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Eventos Realizados
          </button>
        </div>
        {dropdown4 && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-orange-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button-4"
          >
            <div className="py-1" role="none">
              <Link
                to="/san-valentin"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown4(false)}
              >
                San Valentín
              </Link>
              <Link
                to="/pascuas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown4(false)}
              >
                Pascuas
              </Link>
              <Link
                to="/dia-del-padre"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown4(false)}
              >
                Día del Padre
              </Link>
              <Link
                to="/dia-de-la-madre"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown4(false)}
              >
                Día de la Madre
              </Link>
              <Link
                to="/navidad"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown4(false)}
              >
                Navidad
              </Link>
              <Link
                to="/ano-nuevo"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdown4(false)}
              >
                Año Nuevo
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductosDropdown;
