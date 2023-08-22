import PropTypes from 'prop-types'

export const List = ({ elements = [], Item, ...itemPros }) => {
  if (!elements.length) return
  return (
    <ul>
      {
        elements.map(({ id, ...otherProps }) => (
          <li key={id}>
            <Item data={{ id, ...otherProps }} id={id} {...itemPros} />
          </li>

        ))
      }
    </ul>
  )
}

List.propTypes = {
  elements: PropTypes.array,
  EmptyStateComponent: PropTypes.any,
  Item: PropTypes.any,
  itemPros: PropTypes.any
}