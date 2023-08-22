import { Header } from './components/header'
import { Form } from './components/form'
import { PatientList } from './components/patient-list'
import { usePatient } from './hook/patient'
import { useEffect } from 'react'
import { loadLocalStorage, saveLocalStorage } from './util/common'

const KEY_PATIENT = 'patients'

function App() {
  const [
    patients,
    patientForEdit,
    {
      addPatient,
      updatePatient,
      removePatient,
      setPatientForEdit
    }
  ] = usePatient(() => loadLocalStorage(KEY_PATIENT))


  useEffect(() => {
    saveLocalStorage(KEY_PATIENT, patients)
  }, [patients])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <main className="mt-12 md:flex">
        <Form addPatient={addPatient} updatePatient={updatePatient} patientForEdit={patientForEdit} />
        <PatientList patients={patients} setPatientForEdit={setPatientForEdit} onRemove={removePatient} />
      </main>
    </div>
  )
}

export default App
