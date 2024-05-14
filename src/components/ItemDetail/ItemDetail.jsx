const ItemDetail = ({ item }) => {
  const hasDescription = item.description && item.description.trim() !== '';

  return (
    <>
      <div className="flex justify-center m-10">
        <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
      </div>
      <hr />
      <div className="container m-auto mt-8 flex justify-between">
        {hasDescription ? (
          <>
            <div className="grid grid-cols-2 gap-4 w-1/2 mr-10 ml-5" style={{ gridAutoRows: 'auto' }}>
              {item.img.map((imagen, index) => (
                <img
                  loading="lazy"
                  key={index}
                  src={imagen}
                  alt={`${item.title} - Imagen ${index + 1}`}
                  className="w-full h-auto rounded"
                />
              ))}
            </div>
            <div className="w-1/2 flex">
              <div className="bg-gray-300 w-px h-full mx-4"></div>
              <p className="text-xl font-semibold whitespace-pre-line">{item.description}</p>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-4 gap-4 w-full mr-10 ml-5">
            {item.img.map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`${item.title} - Imagen ${index + 1}`}
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
