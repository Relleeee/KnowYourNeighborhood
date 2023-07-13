import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import TNC from './Components/TNC';
import { Dashboard } from './Components/Dashboard';
import AddStore from './Components/AddStore';
import StoreDetail from './Components/StoreDetail';
import SearchResult from './Components/SearchResult';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/terms-and-conditions" element={<TNC />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/add-store" element={<AddStore />}/>
        <Route path="/store-details" element={<StoreDetail/>}/>
        <Route path="/search-result" element={<SearchResult/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
