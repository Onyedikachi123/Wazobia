import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage.jsx'
import EditPage from './pages/Editor/EditPage.jsx'
import PostPage from './pages/Post/PostPage'


const App = () => {
  return (
   <Router>
     <Routes>
       <Route  path="/" element={<HomePage />} />
       <Route path="/edit" element={<EditPage />} />
       <Route path="/post" element={<PostPage />} />
     </Routes>
   </Router>
  );
};

export default App;
