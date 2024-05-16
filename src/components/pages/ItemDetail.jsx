import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import Contador from "../widgets/Contador";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail(props) {

    const valorDelContexto = useCart();

    const handleConfirm = (numero) => {
        valorDelContexto.agregarAlCarrito(numero, props.character);
        toast.success("¡Se agregó un producto al carrito!");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-4 font-weight-bold text-primary">Detalle del Producto</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img className="img-fluid rounded" src={props.character.imagenurl} alt={props.character.title} />
                </div>
                <div className="col-lg-6">
                    <div className="mb-4">
                        <h3 className="font-weight-bold text-info">Titulo</h3>
                        <p>{props.character.titulo}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-weight-bold text-info">Precio</h3>
                        <p>${props.character.precio}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-weight-bold text-info">Descripcion</h3>
                        <p>{props.character.descripcion}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-weight-bold text-info">Categoria</h3>
                        <p>{props.character.category}</p>
                    </div>
                    <Contador handleConfirm={handleConfirm} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
