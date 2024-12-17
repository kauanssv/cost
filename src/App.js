import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Company from './Components/Pages/Company'
import Contact from './Components/Pages/Contact'
import NewProject from './Components/Pages/NewProject'
import Projects from './Components/Pages/Projects'

import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Container customClass='minHeight'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Company' element={<Company/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/NewProject' element={<NewProject/>}/>
              <Route path='/Projects' element={<Projects/>}/>
            </Routes>
          </Container>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
