import { Routes, Route } from 'react-router-dom'
import Contacto from '../pages/Contacto'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import ItemListContainer from '../widgets/ItemListContainer'
import Carrito from '../pages/Carrito'
import Sucursales from '../pages/Sucursales'

function Main() {
    return (
        <main className='container p-4 mx-auto text-white grow mi-main'>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:categoria' element={<ItemListContainer/>} />
                <Route path="/characters/:id" element={<ItemDetailContainer/>}/>
                <Route path='/sucursales' element={<Sucursales/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path='/cart' element={<Carrito/>} />
                <Route path="*" element={<p>No encontrado</p>} />
            </Routes>
        </main>
    )
}

export default Main
