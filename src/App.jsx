/* blibioteca react-router-dom */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
/* importando a pagina principal do projeto*/
import Home from "./pages/home"
import ServicePage from "./pages/servicePage"
import ContactPage from "./pages/contactPage"
import AboutPage from "./pages/aboutPage"
import LoginPage from "./pages/loginPage"

function App() {
  return (
    <Router>
      <Routes>
        {/*rota raiz do projeto e estrutura padrão de escrita*/}
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
