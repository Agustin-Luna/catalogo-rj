



const ItemList = () => {



    return (
        <section className='container m-auto mt-8'>
            <h2 className="text-4xl font-bold  ">Productos</h2>
            <hr />

        {productos.map((item) => {
            <article key={item.id}>
                <img src={item.img} alt={item.Title} />
                <h3 className="text-2xl font-semibold">{item.Title}</h3>
                <hr />
                <p className="text-xl font-bold">{item.description}</p>
            </article>
        })}
        </section>
    )
}

export default ItemList