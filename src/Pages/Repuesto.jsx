import React, { useEffect, useState } from 'react';

const Repuesto = () => {
  const [repuestos, setRepuestos] = useState([]);

  useEffect(() => {
    const obtenerRepuestos = async () => {
      try {
        const response = await fetch('https://dse-backend.onrender.com/apiRepuestos/obtenerRepuestos');

        if (!response.ok) {
          throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        setRepuestos(data);

       
        console.log('Conexión exitosa. Datos recibidos:', data);
      } catch (error) {
        console.error('Error al conectar a la API:', error);
      }
    };

    obtenerRepuestos();
  }, []); 

  return (
    <div className='py-20 pl-80'>
      <h1 className='text-5xl'>Lista de Repuestos</h1>
      <br></br>
      <div className="overflow-x-auto pr-20">
  <table className="table table-md table-pin-rows table-pin-cols border-1">
    <thead>
      <tr>
        
        <td className='text-2xl'>Repuesto</td> 
        <td className='text-2xl'>Marca</td> 
        <td className='text-2xl'>Año</td> 
        <td className='text-2xl'>Cantidad</td> 
        <td className='text-2xl'>Precio</td> 
        
        <th></th> 
      </tr>
    </thead> 
    <tbody>
    {repuestos.map((repuesto) => (
      <tr key={repuesto.RepuestoID}>
        <td className='text-2xl'>{repuesto.Nombre}</td>
        <td className='text-2xl'>{repuesto.Marca}</td>
        <td className='text-2xl'>{repuesto.Anio}</td>
        <td className='text-2xl'>{repuesto.Cantidad}</td>
        <td className='text-2xl'>{repuesto.Precio}</td>
      </tr>
    ))}
  </tbody>
  </table>
</div>

    </div>
  );
};

export default Repuesto;