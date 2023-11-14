import React, { useEffect, useState } from 'react';

const Sucursal = () => {
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    const obtenerSucursales = async () => {
      try {
        const response = await fetch('https://dse-backend.onrender.com/apiSucursales/obtenerSucursales');

        if (!response.ok) {
          throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        setSucursales(data);

       
        console.log('Conexión exitosa. Datos recibidos:', data);
      } catch (error) {
        console.error('Error al conectar a la API:', error);
      }
    };

    obtenerSucursales();
  }, []); 

  return (
    <div className='py-20 pl-80'>
      <h1 className='text-5xl'>Lista de Sucursales</h1>
      <br></br>
      <div className="overflow-x-auto pr-20">
  <table className="table table-md table-pin-rows table-pin-cols border-1">
    <thead>
      <tr>
        
        <td className='text-2xl'>Nombre de Sucursal</td> 
        <td className='text-2xl'>Ubicacion</td> 
        <td className='text-2xl'>Numero de Contacto</td> 
       
        
        <th></th> 
      </tr>
    </thead> 
    <tbody>
    {sucursales.map((sucursal) => (
      <tr key={sucursal.SucursalID}>
        <td className='text-2xl'>{sucursal.NombreSucursal}</td>
        <td className='text-2xl'>{sucursal.Ubicacion}</td>
        <td className='text-2xl'>{sucursal.NumeroContacto}</td>
      </tr>
    ))}
  </tbody>
  </table>
</div>

    </div>
  );
};

export default Sucursal;