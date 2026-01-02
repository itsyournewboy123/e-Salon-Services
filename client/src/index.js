// import React from 'react';
 import ReactDOM from 'react-dom/client';
// import './index.css';
// //import Admin from './Admin';
// import Detail from './Detail';
// import Login from './Login';
// import SalonList from './Salonlist';
// import Services from './Services';
// import Shopreg from './Shopreg';
// import User from './User';
// import Home from './Home';
// import Login from './Login';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import SalonList from './Salonlist';
import Detail from './Detail';
import Login from './Login';
import User from './User';
import shop from './Shopreg';
import Shopreg from './Shopreg';
import Book from './Book';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/salons" element={<SalonList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<User />} />
        <Route path="/shop" element={<Shopreg/>}    />
        <Route path="/book" element={<Book/>}/>
        
      </Routes>
    </Router>

);

