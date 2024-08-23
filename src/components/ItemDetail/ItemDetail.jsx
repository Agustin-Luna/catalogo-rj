import BtnWsp from "../../utils/BotonWhatsapp/BtnWsp";


const ItemDetail = ({ item }) => {
  const hasDescription = item.description && item.description.trim() !== '';

  return (
    <>
      <div className="flex justify-center m-10">
        <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
      </div>
      <hr className="hidden md:block" /> {/* Oculta el hr en dispositivos móviles */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row md:justify-center">
        {hasDescription ? (
          <>
            <div className="order-2 md:order-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-auto md:w-1/2 mx-5" style={{ gridAutoRows: 'auto' }}>
              {item.img.map((imagen, index) => (
                <img
                  loading="lazy"
                  key={index}
                  src={imagen}
                  alt={`${item.title} - Imagen ${index + 1}`}
                  className="w-3/4 md:w-3/4 h-auto rounded mx-auto " // Cambiar el tamaño y centrar en pantallas pequeñas
                />
              ))}
            </div>
            <div className="hidden md:block bg-gray-300 w-px h-auto md:h-full mx-4"></div> {/* Línea divisoria en pantallas grandes */}
            <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center md:items-start mt-4 mb-10 md:mt-0 md:mb-0">
              <p className="text-xl font-semibold whitespace-pre-line text-center md:text-left">{item.description}</p> {/* Centra el texto en mobile, a la izquierda en pantallas grandes */}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-5">
            {item.img.map((imagen, index) => (
              <div key={index} className="w-full flex justify-center">
                <img
                  src={imagen}
                  alt={`${item.title} - Imagen ${index + 1}`}
                  className="w-3/4 md:w-3/4 h-auto rounded mx-auto" // Cambiar el tamaño y centrar en pantallas pequeñas
                />
              </div>
            ))}
          </div>
        )}
      </div>
        <div className="md:flex mr-4"> 
      <BtnWsp  />
        </div>
      </>
  );
};

export default ItemDetail;
