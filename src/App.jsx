import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
import { Home, Contact, About, Projects } from './pages'

const App = () => {
  return (

    <main className='bg-slate-300/20 h-[screen]'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>

  )
}

export default App
