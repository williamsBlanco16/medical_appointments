import { useEffect } from 'react'
import { Header } from './components/header'
import { Form } from './components/form'
import { PatientList } from './components/patient-list'
import { usePatient } from './hook/patient'

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
  ] = usePatient([])




  useEffect(() => {
    console.log('patients', patients)
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
