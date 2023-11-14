import React, { useEffect, useState } from 'react';

const Envio = () => {
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    const obtenerEnvios = async () => {
      try {
        const response = await fetch('https://dse-backend.onrender.com/apiRepuestos/obtenerEnvios');

        if (!response.ok) {
          throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        setEnvios(data);

       
        console.log('Conexión exitosa. Datos recibidos:', data);
      } catch (error) {
        console.error('Error al conectar a la API:', error);
      }
    };

    obtenerEnvios();
  }, []); 

  return (
    <div className='py-20 pl-80'>
      <h1 className='text-5xl'>Lista de Envios</h1>
      <br></br>
      <div className="overflow-x-auto pr-20">
  <table className="table table-md table-pin-rows table-pin-cols border-1">
    <thead>
      <tr>
        
        <td className='text-2xl'>Nombre del Cliente</td> 
        <td className='text-2xl'>Estado</td> 
        <td className='text-2xl'>Id del envio</td> 
        <td className='text-2xl'></td> 
        
        <th></th> 
      </tr>
    </thead> 
    <tbody>
    {envios.map((envio) => (
      <tr key={envio.EnvioID}>
        <td className='text-2xl'>{envio.Cliente}</td>
        <td className='text-2xl'>{envio.Estado}</td>
        <td className='text-2xl'>{envio.EnvioArticulosID}</td>
        <td><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Preparar Envio</button></td>
    
      </tr>
    ))}
  </tbody>
  </table>
</div>

    </div>
  );
};

export default Envio;