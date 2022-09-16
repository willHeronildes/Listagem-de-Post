import React from "react";

import {BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import Post from './pages/post';
import Edit from './pages/edit'
import LerMais from "./pages/lermais";
import Feed from "./pages/feed";

function App() {
    return(
      <Router>
         <Routes>
           <Route path="/" element={<Feed/>}/>
           <Route path="/post" element={<Post/>}/>
           <Route path="/edit" element={<Edit/>}/>
           <Route path="/lermais" element={<LerMais/>}/>
         </Routes>
      </Router>
    )  
}

export default App;
