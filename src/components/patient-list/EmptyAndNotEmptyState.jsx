import { memo } from "react"
import PropTypes from 'prop-types'

export const EmptyAndNotEmptyState = memo(({ isEmpty = true }) => {
  const title = isEmpty ? 'No hay pacientes' : 'Listado Pacientes'
  const description = isEmpty ? 'Comienza agregando pacientes y' : 'Administra tus'
  const highlightedDescription = isEmpty ? 'apareceran en este lugar' : 'Pacientes y Citas'

  return (
    <>
      <h2 className="font-black text-3xl text-center">{title}</h2>
      <p className="text-xl mt-5 mb-10 text-center">  {description}{''}
        <span className="text-indigo-600 font-bold">
          {highlightedDescription}
        </span>
      </p>
    </>
  )
})

EmptyAndNotEmptyState.propTypes = {
  isEmpty: PropTypes.bool
}

EmptyAndNotEmptyState.displayName = 'EmptyAndNotEmptyState'

