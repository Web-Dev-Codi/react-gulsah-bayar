import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Karakaya from './components/Karakaya';
import PublicAdministration from './components/PublicAdministration';
import SocialJustice from './components/SocialJustice';
import Impressum from './components/Impressum';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-transparent">

        <NavBar />
        <main className='container mx-auto pt-6 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/karakaya' element={<Karakaya />} />
            <Route path='/publicAdministration' element={<PublicAdministration />} />
            <Route path='/socialjustice' element={<SocialJustice />} />
            <Route path='/impressum' element={<Impressum />} />
            <Route path='/success' element={<Success />} />
          </Routes>

        </main>
        <Footer />
      </div>

    </Router>
  )
}

export default App
