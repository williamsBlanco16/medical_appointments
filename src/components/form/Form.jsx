export const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Agrega pacientes {''} <span className="text-indigo-600 font-bold">Adminimistrados</span></p>

      <form className="bg-white shadow-md rounded py-10 px-5 ">
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="pet">Nombre Mascota:</label>
          <input id="pet" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded" type="text" placeholder='nombre mascota' />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="owner">Nombre Propietario:</label>
          <input id="owner" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded" type="text" placeholder='nombre del propietario' />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="pet">Email:</label>
          <input id="email" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded" type="email" placeholder='Email Contacto Propietario' />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta:</label>
          <input id="alta" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded" type="date" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Sintomas:</label>
          <textarea id="symptoms" placeholder="Descripcion de los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value="agregar paciente" />
      </form>
    </div>
  )
}