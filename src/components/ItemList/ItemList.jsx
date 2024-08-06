import ItemCard from "../ItemCard/ItemCard"
import BtnWsp from "../../utils/BotonWhatsapp/BtnWsp";


const ItemList = ({ productos }) => {
    return (
        <section className='container m-auto mt-8'>
            <h2 className="text-4xl font-bold mb-4 flex justify-center">Productos</h2>
            <hr />

            <div className="flex flex-wrap justify-center gap-10 m-10 items-center">
                {productos.map((item) => (
                    <>
                    <ItemCard key={item.id} item={item} /> 
                    <BtnWsp/>
                    </>
                ))}
            </div>
        </section>
    );
};

export default ItemList;