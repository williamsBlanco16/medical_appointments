import PropTypes from 'prop-types'

export const Button = ({ children, className, ...otherProps }) => {
  return (
    <button
      type='button'
      className={`py-2 px-10 text-white font-bold uppercase rounded-lg ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  otherProps: PropTypes.object
}
