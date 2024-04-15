import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"



const ItemListContainer = () => {
    const [proroductos, setProductos] = useState([])

        useEffect(() => {
            pedirDatos()
            .then((data) => {
                setProductos(data)
            })
        }, [])



    return (
        <>
        </>
    )
}

export default ItemListContainer