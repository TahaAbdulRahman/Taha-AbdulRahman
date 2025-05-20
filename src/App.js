import './taha.css';
import  Header from './component/header'
import Landing from './component/landing';
import About from './component/about';
import Skills from './component/skills';
import Project from './component/project';
import ContactUs from './component/contact';
import Footer from './component/footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import Loading from './component/loading';
import Services from './component/Services';

function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/home' index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='*' index element={<Landing />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
