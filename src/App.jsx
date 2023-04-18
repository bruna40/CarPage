import { GlobalStyle } from "./Style/global"
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/index';
import { CycleProvider } from "./Context/CycleContext";

function App() {

  return (
    <BrowserRouter>
      <CycleProvider>
        <Router />
      </CycleProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
