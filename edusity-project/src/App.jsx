import React, { useState } from 'react';
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testmonials from './components/Testimonials/Testmonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'
import Videoplayer from './components/VideoPlayer/VideoPlayer';

const App = () => {

  const[playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testmonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App;