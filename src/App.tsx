import './App.css'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Image />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
