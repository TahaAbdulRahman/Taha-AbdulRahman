import './taha.css';
import  Header from './component/header'
import Landing from './component/landing';
import About from './component/about';
import Skills from './component/skills';
import Project from './component/project';
import Contact from './component/contact';
import Footer from './component/footer';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/home' index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' index element={<Landing />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
