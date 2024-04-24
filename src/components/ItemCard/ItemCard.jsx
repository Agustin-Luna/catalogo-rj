import Button from "../../utils/Button/Button"

const ItemCard = ({item}) => {
    return (
        <div>
            <article key={item.id} className="w-80 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-pink-400 border border-gray-300 rounded-md p-4">
            <img src={item.img} alt={item.Title} className="w-full h-80 object-cover" />
            <h3 className="text-2xl font-semibold ml-2">{item.Title}</h3>
            <hr />
            <p className="text-xl font-bold">{item.description}</p>
            <Button>Ver Mas</Button>
        </article>
        </div>
    )
}

export default ItemCard












