import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contact from './components/conatct/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <div className="App">
       <Navbar />
       <Intro />
       <Skills />
       <Works />
       <Contact />
       <Footer />
      </div>
    </>
  )
}

export default App;