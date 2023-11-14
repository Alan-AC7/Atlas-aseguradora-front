import React, { useEffect, useState } from 'react';

const Tienda = () => {
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    const obtenerTiendas = async () => {
      try {
        const response = await fetch('https://dse-backend.onrender.com/apiRepuestos/obtenerTiendas');

        if (!response.ok) {
          throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        setTiendas(data);

       
        console.log('Conexión exitosa. Datos recibidos:', data);
      } catch (error) {
        console.error('Error al conectar a la API:', error);
      }
    };

    obtenerTiendas();
  }, []); 

  return (
    <div className='py-20 pl-80'>
      <h1 className='text-5xl'>Lista de Tiendas</h1>
      <br></br>
      <div className="overflow-x-auto pr-20">
  <table className="table table-md table-pin-rows table-pin-cols border-1">
    <thead>
      <tr>
        
        <td className='text-2xl'>Tienda</td> 
        <td className='text-2xl'>Contacto</td> 
        <td className='text-2xl'>Ubicacion</td> 
        
        <th></th> 
      </tr>
    </thead> 
    <tbody>
    {tiendas.map((tienda) => (
      <tr key={tienda.TiendaID}>
        <td className='text-2xl'>{tienda.Nombre}</td>
        <td className='text-2xl'>{tienda.Contacto}</td>
        <td className='text-2xl'>{tienda.Ubicacion}</td>
      
      </tr>
    ))}
  </tbody>
  </table>
</div>

    </div>
  );
};

export default Tienda;