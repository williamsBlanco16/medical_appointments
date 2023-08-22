import { useState } from "react"

export const usePatient = (initialState) => {
  const [patients, setPatients] = useState(initialState)

  const [patientForEdit, setPatientForEdit] = useState({})

  const getPatient = (id) => {
    if (!id) return
    patients.find(patient => patient.id === id)
  }

  const addPatient = (patient) => setPatients(prevPatiens => [...prevPatiens, patient])

  const updatePatient = (patientEdited) => {
    setPatients(prevPatiens => prevPatiens.map(patient => {
      if (patientEdited.id === patient.id) {
        return patientEdited
      }
      return patient
    }))
    setPatientForEdit({})
  }

  const removePatient = (id) => setPatients(prevPatiens => prevPatiens.filter(patient => patient.id !== id))

  return [
    patients,
    patientForEdit,
    {
      getPatient,
      addPatient,
      updatePatient,
      removePatient,
      setPatientForEdit,
      setPatients
    }
  ]
}