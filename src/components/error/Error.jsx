import PropTypes from 'prop-types'

export const Error = ({ message = 'Todos los campos son obligatorios' }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      <p>{message}</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string
}