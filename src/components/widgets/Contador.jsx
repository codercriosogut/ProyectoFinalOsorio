import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contador(props) {

    const [numero, setNumero] = useState(0);
    
    const incrementar = () => {
        setNumero(numero + 1);
    };

    const decrementar = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    };

    const confirmar = () => {
        if (numero > 0) {
            props.handleConfirm(numero);
        }
    };

    const volver = () => {
        window.history.back();
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="btn-group">
                <button onClick={decrementar} className="btn btn-secondary">-</button>
                <p className="btn btn-light">{numero}</p>
                <button onClick={incrementar} className="btn btn-secondary">+</button>
            </div>
            <button onClick={confirmar} className="btn btn-primary mt-2">Agregar al carrito</button>
            <button onClick={volver} className="btn btn-lg btn-danger mt-2">Volver</button>
        </div>
    );
}

export default Contador;
