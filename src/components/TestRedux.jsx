import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarEnvio, limpiarEnvio } from '../features/envio/envioSlice';

export const TestRedux = () => {
    const envio = useSelector((state) => state.envio.datos);
    const distpach = useDispatch();

    const dummyData = {
        nombre: 'Marcelo',
        apellido: 'Carabajal',
        peso: '7',
        email: 'marce@marce.com',
        estado: 'MINL Normal',
    };

    const handleGuardar = () => {
        distpach(guardarEnvio(dummyData));
    }

    const handleLimpiar = () => {
        console.log("limpiando ...");
        distpach(limpiarEnvio());
        
    }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc"}}>
        <h2>Test de Redux</h2>
        <button onClick={handleGuardar}>Guardar datos</button>
        <button onClick={handleLimpiar}>Limpiar datos</button>
        <pre>{JSON.stringify(envio, null, 2)}</pre>
    </div>
  )
}
