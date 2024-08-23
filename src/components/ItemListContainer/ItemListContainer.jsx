import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config.js"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    
    const {categoryId} = useParams()
    

    useEffect(() => {
        // 1_armar la ref
        const productosRef = collection(db, 'productos')
        const docRef = categoryId 
                        ? query( productosRef, where('category', '==', categoryId ))
                        :productosRef
        // 2_llamar la ref
        getDocs( docRef )
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id

                    }
                })
                
                setProductos( docs )
            })
        }, [categoryId]);



    return (
        <>
        <ItemList productos={productos}/>
        
        </>
    )
}

export default ItemListContainer