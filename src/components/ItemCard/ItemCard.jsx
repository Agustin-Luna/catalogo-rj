import { Link } from "react-router-dom";
import Button from "../../utils/Button/Button";


const ItemCard = ({ item }) => {
  return (
    <div className="w-80  h-full mb-4">
      <article className="hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-pink-500 border border-gray-300 rounded-md p-4 h-96 ">
        <img src={item.img[0]} alt={item.title} className="w-full h-56 object-cover mb-2 border rounded-md" />
        <h3 className="text-2xl font-semibold  overflow-hidden overflow-y-auto h-16 items-center w-auto flex justify-center ">{item.title}</h3>
        <hr />
        <div className="flex justify-center items-center">
        <Button className= "w-36 rounded-full">
            <Link to={`/item/${item.id}`} className=" flex items-center justify-center w-full">Ver Mas</Link>
        </Button>
        </div>
      </article>
    </div>
  );
};

export default ItemCard;