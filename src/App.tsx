import './App.css'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const navItems = ['services', 'portfolio', 'about', 'contact'];
  return (
    <>
      <Navbar navItems={navItems}/>
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
