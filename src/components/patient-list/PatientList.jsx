import { PatientItem } from "../patient"
import { List } from "../list"
import PropTypes from 'prop-types'
import { EmptyAndNotEmptyState } from './EmptyAndNotEmptyState'

export const PatientList = ({ patients = [] }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <EmptyAndNotEmptyState isEmpty={patients.length === 0} />

      <List
        Item={PatientItem}
        elements={patients}
      />
    </div>
  )
}


PatientList.propTypes = {
  patients: PropTypes.array
}