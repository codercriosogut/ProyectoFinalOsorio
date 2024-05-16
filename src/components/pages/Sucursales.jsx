import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sucursales() {
  const [detalleSucursal, setDetalleSucursal] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const delay = 1000;
    const timeout = setTimeout(() => {
      setCargando(false);
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  const sucursales = [
    { id: 1, nombre: "Sucursal Norte - Iquique", imagen: "https://source.unsplash.com/random/300x300/?store?1", contenido: "Nacimos el 2016 en Iquique por la inquietud de poder hacer comida deliciosa pero sana a la vez y desde entonces estamos enseñando a nuestros clientes sobre masa madre y fermentación natural que es lo que usamos para hacer nuestros panes" },
    { id: 2, nombre: "Sucursal Centro Santiago", imagen: "https://source.unsplash.com/random/300x300/?store?2", contenido: "La herencia de nuestra compañía es su larga tradición panadera, iniciada en el año 1933, en Santiago. Desde siempre ha existido un fuerte compromiso con la calidad de nuestros productos, consistencia que ha permitido a la marca gozar de gran prestigio en el mercado." },
    { id: 3, nombre: "Sucursal Sur Temuco", imagen: "https://source.unsplash.com/random/300x300/?store?3", contenido: "Nuestra historia parte bajo el alero de Cramer, empresa dedicada a la elaboración de Pan Artesanal, en la comuna de Temuco. Fue aquí donde en 1958 elaboramos nuestro primer producto: Pan Masa Madre." }
  ];

  const handleClickDetalle = (sucursal) => {
    setDetalleSucursal(sucursal);
  };

  return (
    <div className="container mt-5">
      {cargando ? (
        <div className="text-center">
          <p className="text-primary mb-2">Cargando...</p>
          <div className="spinner-border text-primary" role="status">
          </div>
        </div>
      ) : (
        <div>
          {detalleSucursal ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Detalle de la {detalleSucursal.nombre}</h3>
              <img src={detalleSucursal.imagen} alt={detalleSucursal.nombre} className="img-thumbnail mx-auto d-block mb-4" style={{ maxWidth: '300px', maxHeight: '300px' }} />
              <p>{detalleSucursal.contenido}</p>
              <button onClick={() => setDetalleSucursal(null)} className="btn btn-primary mt-3">Volver</button>
            </div>

          ) : (
            <div>
              <h2 className='text-center mb-4 text-4xl font-bold'>Sucursales</h2>
              <div className="row">
                {sucursales.slice(0, 3).map((sucursal) => (
                  <div key={sucursal.id} className="col-md-4 mb-4">
                    <div className="card">
                      <img src={sucursal.imagen} alt="" className="card-img-top" style={{ objectFit: 'cover', height: '250px' }} />
                      <div className="card-body">
                        <h3 className="card-title text-center text-primary">{sucursal.nombre}</h3>
                        <div className="text-center">
                          <button onClick={() => handleClickDetalle(sucursal)} className="btn btn-primary btn-block">Ver detalle</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Sucursales;
