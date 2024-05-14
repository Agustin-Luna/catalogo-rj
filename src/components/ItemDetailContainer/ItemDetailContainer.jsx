import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { db } from "../../firebase/config.js"
import { DocumentSnapshot, doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()


    useEffect(() => {
        // crear la ref
        const docRef = doc( db, 'productos', itemId )
        // llamar la ref
        getDoc( docRef )
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem( doc )
            })



            }, []); 
        

    return (
        <>
            {item && <ItemDetail item={item}/>}  
        </>
    )
}

export default ItemDetailContainer