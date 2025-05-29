import FormularioEnvioFormikRedux from "./components/FormularioEnvioFormikRedux"
import PrimerHeader from "./components/PrimerHeader"
import Previsualizacion from "./components/Previsualizacion"
import StepIndicator from "./components/StepIndicator"
import StepsVertical from "./components/StepIndicator"
// import { TestRedux } from "./components/TestRedux"

function App() {

  return (
    <>
      <PrimerHeader />
      <h1 className="text-2xl font-bold text-center mt-4">Formulario de Encomienda</h1>
      <FormularioEnvioFormikRedux />
      <Previsualizacion />
      <StepIndicator currentStep={2} totalSteps={4}/>
    </>
  )
}

export default App
