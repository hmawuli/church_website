import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Sermon from './components/Sermon';
import Blog from './components/Blog';
import Contact from './components/Contact';
import MediaGallery from './components/Mediad Gallery';
import Donate from './components/Donate';
import Devotional from "./components/Devotional";
import Books from "./components/Books";



// import UpcomingEvents from './components/UpcomingEvents';
// import UpcomingSermons from './components/UpcomingSermons';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/sermon" element={<Sermon/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/media" element={<MediaGallery/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/devotional" element={<Devotional/>} />
        <Route path="/books" element={<Books/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;
