/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavPane from './components/NavPane';
import Main from './pages/Main/Main';
import Publish from './pages/PublishBlog/Publish';
import Logout from './pages/Logout/Logout';
import "./Dashboard.css"
import FullBlogPage from './pages/FullBlogPage/FullBlogPage';
import EditBlogPage from './pages/Edit/EditBlogPage';


function Dashboard(){   

  const location = useLocation();
  const username = location.state ? location.state.username : '';


  return (
    <>

        <NavPane username={username} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/blog/:id/*" element={<FullBlogPage />} />
            <Route path="blog/:id/edit" element={<EditBlogPage />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        
    </>
  );
}

export default Dashboard;



