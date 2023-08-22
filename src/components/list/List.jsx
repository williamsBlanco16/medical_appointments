import PropTypes from 'prop-types'

export const List = ({ elements = [], Item }) => {
  if (!elements.length) return
  return (
    <ul>
      {
        elements.map(({ id, ...otherProps }) => (
          <li key={id}>
            <Item data={otherProps} />
          </li>

        ))
      }
    </ul>
  )
}

List.propTypes = {
  elements: PropTypes.array,
  EmptyStateComponent: PropTypes.any,
  Item: PropTypes.any
}