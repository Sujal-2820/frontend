/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const truncateContent = (content, wordLimit) => {
  const words = content.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return content;
};

const Main = () => {

  const [blogs, setBlogs] = useState([]);
  const [Loading, setLoading] = useState(true);


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {

    const authToken = localStorage.getItem('authToken');
    axios
      .get('http://localhost:8080/blog', {
          headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (Loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="main-dashboard">
      {blogs.length === 0 ? (
        <div className="empty-state">
          <p>Nothing to show right now</p>
          <Link to="/dashboard/publish" className="add-blog-button">
            Add a Blog
          </Link>
        </div>
      ) : (blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <div className="image-container">
              <img src={`http://localhost:8080/${blog.imageURL}`} alt="Img" className="image" />
            </div>
            <div className="content-container">
              <h2>{blog.title}</h2>
              <div className="content-wrapper">
                <p className="blog-content">
                  {truncateContent(blog.content, 50)}
                </p>
              </div>
              <button><Link to={`blog/${blog._id}`}>View Full Blog</Link></button>
            </div>
          </div>
        ))
        )}
      </div>
    </>
  );
};

export default Main;
