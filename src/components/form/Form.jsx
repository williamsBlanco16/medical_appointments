import { Input } from "../input"
import { useInput } from '../../hook/form'
import PropTypes from 'prop-types'


export const Form = ({ addPatient = () => { } }) => {

  const [nameProps, nameReset] = useInput('')
  const [ownerProps, ownerReset] = useInput('')
  const [emailProps, emailReset] = useInput('')
  const [dateProps, dateReset] = useInput('')
  const [symptomsProps, symptomsReset] = useInput('')


  const resetForm = () => {
    nameReset()
    ownerReset()
    emailReset()
    dateReset()
    symptomsReset()
  }

  const getPatientFormat = () => {
    return {
      name: nameProps.value,
      owner: ownerProps.value,
      email: emailProps.value,
      date: dateProps.value,
      symptoms: symptomsProps.value
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const patient = getPatientFormat()
    addPatient(patient)
    resetForm()

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Agrega pacientes {''} <span className="text-indigo-600 font-bold">Adminimistrados</span></p>

      <form className="bg-white shadow-md rounded py-10 px-5 " onSubmit={handleSubmit}>
        <Input id='pet' label='Nombre Mascota:' placeholder='nombre mascota' {...nameProps} />
        <Input id='owner' label='Nombre Propietario:' placeholder='nombre del propietario' {...ownerProps} />
        <Input id='email' label='Email:' placeholder='Email Contacto Propietario' type='email' {...emailProps} />
        <Input id='date' label='Alta:' type='date' {...dateProps} />
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Sintomas:</label>
          <textarea id="symptoms" placeholder="Descripcion de los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" {...symptomsProps} />
        </div>
        <Input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold focus:bg-indigo-700 hover:bg-indigo-700 cursor-pointer transition-colors" value="agregar paciente" />
      </form>
    </div>
  )
}

Form.propTypes = {
  addPatient: PropTypes.func.isRequired
}