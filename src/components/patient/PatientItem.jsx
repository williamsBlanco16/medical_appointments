import PropTypes from 'prop-types'
import { memo } from 'react'

const Patient = ({ data }) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-3">Nombre: {''} <span className="font-normal normal-case">{data.name}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Email: {''} <span className="font-normal normal-case">{data.email}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Fecha Alta: {''} <span className="font-normal normal-case">{data.date}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Sintomas: {''} <span className="font-normal normal-case">{data.symptoms}</span></p>
    </div>
  )
}

Patient.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    date: PropTypes.string,
    symptoms: PropTypes.string
  })
}


export const PatientItem = memo(Patient)