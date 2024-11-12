import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/component/NavBar'
import data from "./data"
import Services from './assets/component/Services'
import Hero from './assets/component/Hero'
import About from './assets/component/About'
import Footer from './assets/component/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
const datas=data.map(item => {
  return <Services 
  key={item.id}
  items={item}
  />
})
  return (
    <>


<Router>
       <NavBar/>
       
       <Hero/>

       <h1>Services</h1>
        <section className="cards-list">
              {datas}
        </section>

        <About/>

            <Routes>
                <Route path="/Hero" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" 
                       element={
                       <section className="cards-list">
                       {datas}
                       </section>} />
               
            </Routes>
        <Footer />
</Router>
    </>
  )
}

export default App
