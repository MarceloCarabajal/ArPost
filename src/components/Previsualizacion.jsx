import { useSelector } from "react-redux"

const Previsualizacion = () => {

  const envio = useSelector((state) => state.envio.datos);

  if (!envio) {
    return <p className="text-center text-gray-500 mt-4">No hay datos cargados para previsualizar</p>
  }

  return (
    <div className="mt-8 p-4 border rounded-md max-w-2xl mx-auto shadow">
      <h2 className="text-xl font-bold mb-4">Previsualización del Envio</h2>

      <div>
        <div>
          <strong>Nombre:</strong> {envio.nombre}
        </div>
        <div>
          <strong>Apellido:</strong> {envio.apellido}
        </div>
        <div>
          <strong>Email:</strong> {envio.email}
        </div>
        <div>
          <strong>Peso declarado:</strong> {envio.peso} kg
        </div>
        <div>
          <strong>Estado:</strong> {envio.estado}
        </div>
        <div>
          <strong>Condición:</strong> {envio.condicion || "30 Artículo recibido en buenas condiciones"}  
        </div>

        <div className="col-span-2">
          <strong>Declaración de contenido:</strong> {envio.declaracion || "Sin comentarios"}  
        </div>

        <div className="col-span-2">
          <strong>Observaciones:</strong> {envio.declaracion || "Sin observaciones"}  
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Confirmar</button>
        </div>

      </div>
    </div>
  )
}

export default Previsualizacion
