import { GlobalStyle } from "./Style/global"
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/index';

function App() {

  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
