import { useState } from "react";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import { createSale } from "../../utils";

function Carrito() {
  const { carrito } = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Procesando compra...");
    const usuario = { nombre, telefono, email };
    await createSale(carrito, usuario);
    toast.dismiss();
    toast.success("Compra realizada con éxito!");
    window.location.reload();
    setNombre("");
    setTelefono("");
    setEmail("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-4xl font-bold mb-5">Carrito</h2>
      {carrito.length === 0 ? (
        <p className="text-center text-red-500">El carrito se encuentra vacío.</p>
      ) : (
        <div className="row">
          {carrito.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title mb-3 font-bold text-red-500">{item.titulo}</h3>
                  <p className="card-text"><span className="font-bold">Precio:</span> ${item.precio}</p>
                  <p className="card-text"><span className="font-bold">Cantidad:</span> {item.cantidad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-primary btn-block">Comprar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Carrito;
