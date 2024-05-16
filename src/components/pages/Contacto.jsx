import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const miPromesa = new Promise((resolve, reject) => {
    
        setTimeout(() => {
       
          resolve()
        }, 5000);
      });
      await miPromesa;

      setEnviado(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setEnviado(false);
      }, 3000);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-3xl font-bold mb-4">Contacto</h2>
      {enviado ? (
        <div className="alert alert-success text-center mb-4" role="alert">
          ¡Formulario enviado exitosamente!
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="4" className="form-control"></textarea>
        </div>
        <button type="submit" className={`btn btn-primary ${loading ? 'disabled' : ''}`} disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}

export default Contacto;
