import React, { useState } from 'react';


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
    <div className="flex flex-row gap-6 pr-20"> {/* Cambiado flex-col a flex-row */}
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
            Dropdown 1
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
              {[...Array(8)].map((_, index) => (
                <a
                  key={index}
                  to={`/page1/item${index + 1}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => setDropdown1(false)}
                >
                  Item {index + 1}
                </a>
              ))}
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
            Dropdown 2
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
              {[...Array(8)].map((_, index) => (
                <a
                  key={index}
                  to={`/page2/item${index + 1}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => setDropdown2(false)}
                >
                  Item {index + 1}
                </a>
              ))}
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
            Dropdown 3
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
              {[...Array(8)].map((_, index) => (
                <a
                  key={index}
                  to={`/page3/item${index + 1}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => setDropdown3(false)}
                >
                  Item {index + 1}
                </a>
              ))}
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
            Dropdown 4
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
              {[...Array(8)].map((_, index) => (
                <a
                  key={index}
                  to={`/page4/item${index + 1}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => setDropdown4(false)}
                >
                  Item {index + 1}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductosDropdown;