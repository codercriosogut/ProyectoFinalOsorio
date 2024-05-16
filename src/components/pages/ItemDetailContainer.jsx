import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { getProductDetail } from "../../utils";


function ItemDetailContainer() {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        getProductDetail(id)
            .then((resultado) => {
                setCharacter(resultado)
            })
    }, []);

    return (
        <div>
            <ItemDetail character={character} />
        </div>
    )

}

export default ItemDetailContainer