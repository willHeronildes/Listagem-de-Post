import React from "react";

import {BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import Post from './pages/Post/post';
import Edit from './pages/Edit/edit'
import LerMais from "./pages/LerMais/lermais";
import Feed from "./pages/Feed/feed";

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
