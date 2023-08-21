export const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">Agrega pacientes {''} <spam className="text-indigo-600 font-bold">Adminimistrados</spam></p>

      <form className="bg-white shadow-md rounded py-10 px-5">
        <div>
          <label htmlFor="">Nombre Mascota:</label>
          <input type="text" placeholder='nombre mascota' />
        </div>
      </form>
    </div>
  )
}