import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Desktop from './components/Desktop'
import Footer from './components/Footer'

function App() {


  return (
    <div>
        <Navbar />
        <Card />
        <Routes>
              <Route path="Desktop" element={<Desktop />}></Route>
              <Route path="Mobile" element={<Desktop />}></Route>
              {/* <Route path="*" element={
                <h2>
                    Pagina principal
                </h2>}>
              </Route> */}
        </Routes>
        <Footer />
    </div>
  )
}

export default App
