import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import UsersCardList from "./UsersCardList"
import { getProducts, getProductsFromCategories } from "../../utils"

function ItemListContainer() {
    const [characters, setCharacters] = useState([])
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        if (params.categoria) { 
            const categoria = params.categoria.toLowerCase(); 
            getProductsFromCategories(categoria)
            .then((resultado)=>{
                setCharacters(resultado)
            })
        } else { 
            getProducts()
            .then((resultado)=>{
                setCharacters(resultado)
            })
        }
    }, [params.categoria])

    // Extraer el nombre de la categoría de la URL
    const categoryName = location.pathname.split("/").pop() || "Productos"

    return (
        <div className="">
            <h2 className="mb-5 text-4xl font-bold">Lista de {categoryName}</h2>
            <UsersCardList characters={characters} />
        </div>
    )
}

export default ItemListContainer
