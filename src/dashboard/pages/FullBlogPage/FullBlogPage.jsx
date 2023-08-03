import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./FullBlogPage.css";
import { Link } from 'react-router-dom';


const FullBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  const Navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setBlog(response.data.blog);
        console.log(response.data.blog);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      await axios.delete(`http://localhost:8080/blog/${blog._id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      Navigate("/dashboard/");

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    Navigate(`/dashboard/blog/${blog._id}/edit`);
  }


  return (
      <div className="full-blog-page">
        <div className="cover-image-container">
          {blog.imageURL && <img src={`http://localhost:8080/${blog.imageURL}`} alt="Blog" />}
        </div>
        <div className="blog-details">
          <h2>{blog.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
        <div className="action-buttons">
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
          <div className='Link1'>
            <Link to="/dashboard/"> ← Go back to Home page</Link>
          </div>
      </div>
  );
};

export default FullBlogPage;