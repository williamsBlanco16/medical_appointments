import PropTypes from 'prop-types'

export const Input = ({ id, label, placeholder = '', ...otherProps }) => {
  return (
    <div className="mb-5">
      <label
        className="block text-gray-700 uppercase font-bold"
        htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded"
        type="text"
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  otherProps: PropTypes.object
}
