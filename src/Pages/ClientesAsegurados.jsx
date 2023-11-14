import React, { useEffect, useState } from 'react';

const Asegurados = () => {
  const [asegurados, setAsegurados] = useState([]);

  useEffect(() => {
    const obtenerAsegurados = async () => {
      try {
        const response = await fetch('https://dse-backend.onrender.com/apiClientes/obtenerClientesConAutos');

        if (!response.ok) {
          throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        setAsegurados(data);
        console.log('Conexión exitosa. Datos recibidos:', data);
      } catch (error) {
        console.error('Error al conectar a la API:', error);
      }
    };

    obtenerAsegurados();
  }, []); 

  return (
    <div className='py-20 pl-80'>
      <h1 className='text-5xl'>Lista de Clientes</h1>
      <br></br>
      <div className="overflow-x-auto pr-20">
        <table className="table table-md table-pin-rows table-pin-cols border-1">
          <thead>
            <tr>
              <th className='text-2xl'>Nombre del Cliente</th>
              <th className='text-2xl'>Tipo de Seguro</th>
              <th className='text-2xl'>Auto</th>
          
            </tr>
          </thead>
          <tbody>
            {asegurados.map((asegurado) => (
              <tr key={asegurado.ClienteID}>
                <td className='text-2xl'>{asegurado.Nombre}</td>
                <td className='text-2xl'>{asegurado.TipoSeguro}</td>
                <td className='text-2xl'>
                  {asegurado.Autos.map((auto, index) => (
                    <div key={index}>
                      <p>Marca: {auto.Marca}</p>
                      <p>Modelo: {auto.Modelo}</p>
                      <p>Año: {auto.Anio}</p>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Asegurados;
