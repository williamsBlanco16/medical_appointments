import { Input } from "../input"
import { Error } from '../error'
import { useInput } from '../../hook/form'
import PropTypes from 'prop-types'
import { generateId } from "../../util/common"
import { useCallback, useEffect, useState } from "react"



export const Form = ({ addPatient = () => { }, patientForEdit, updatePatient }) => {

  const [nameProps, nameReset, setName] = useInput('')
  const [ownerProps, ownerReset, setOwner] = useInput('')
  const [emailProps, emailReset, setEmail] = useInput('')
  const [dateProps, dateReset, setDate] = useInput('')
  const [symptomsProps, symptomsReset, setSympthoms] = useInput('')

  const setValuesForEdit = useCallback(() => {
    const { name, owner, email, date, symptoms } = patientForEdit
    setName(name)
    setOwner(owner)
    setEmail(email)
    setDate(date)
    setSympthoms(symptoms)
  }, [patientForEdit, setDate, setEmail, setName, setOwner, setSympthoms])
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!Object.keys(patientForEdit).length) return
    setValuesForEdit()

  }, [patientForEdit, setValuesForEdit])


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
    if (Object.values(patient).includes('')) {
      setError(true)
      return
    }
    if (patientForEdit?.id) {
      //update
      patient.id = patientForEdit.id
      updatePatient(patient)
    } else {
      patient.id = generateId()
      addPatient(patient)
    }
    resetForm()
    setError(false)

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Agrega pacientes {''} <span className="text-indigo-600 font-bold">Adminimistrados</span></p>
      {error && <Error />}
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
  addPatient: PropTypes.func.isRequired,
  patientForEdit: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.string,
    email: PropTypes.string,
    date: PropTypes.string,
    symptoms: PropTypes.string,
    id: PropTypes.string
  }),
  updatePatient: PropTypes.func
}