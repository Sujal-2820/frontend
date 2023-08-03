/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Publish.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Publish = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const formData = new FormData();         //Form Data used in case of file upload
    formData.append('content', content);
    formData.append('title', title);
    formData.append('image', image);
    
    const authToken = localStorage.getItem('authToken'); // Get the authentication token from local storage

      axios
        .post('http://localhost:8080/blog/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authToken}` // Include the authentication token in the request headers
          }
        })
        .then((response) => {
          // Handle the success response
          console.log(response.data); // Log the response from the server
          // Reset the form fields

          setTitle('');
          setContent('');
          setImage('');
          Navigate("/dashboard/");

        })
        .catch((error) => {
          // Handle the error response
          console.error(error);
        });
  };

  return (
    <div className="publish-container">
      <h2>Publish Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" onChange={handleImageChange} /> {/*Add multiple for Selecting multiple files */}
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" rows="6" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit" className="publish-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Publish;
