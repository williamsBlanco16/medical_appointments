import PropTypes from 'prop-types'
import { memo } from 'react'
import { Button } from '../button'

const Patient = ({ data, onRemove, setPatientForEdit }) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-3">Nombre: {''} <span className="font-normal normal-case">{data.name}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Email: {''} <span className="font-normal normal-case">{data.email}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Fecha Alta: {''} <span className="font-normal normal-case">{data.date}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Sintomas: {''} <span className="font-normal normal-case">{data.symptoms}</span></p>
      <div className='flex justify-between'>
        <Button className='bg-indigo-600 hover:bg-indigo-700' onClick={() => setPatientForEdit(data)}> Editar </Button>
        <Button className='bg-red-600 hover:bg-red-700' onClick={() => onRemove(data.id)}> Eliminar </Button>
      </div>

    </div>
  )
}

Patient.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    date: PropTypes.string,
    symptoms: PropTypes.string,
    id: PropTypes.string
  }),
  setPatientForEdit: PropTypes.func,
  onRemove: PropTypes.func
}


export const PatientItem = memo(Patient)