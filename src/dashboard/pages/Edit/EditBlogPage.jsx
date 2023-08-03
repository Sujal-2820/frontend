import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditBlogPage.css'; // Import your CSS file for styling

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [existingImageURL, setExistingImageURL] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const blog = response.data.blog;
        setTitle(blog.title);
        setContent(blog.content);
        setExistingImageURL(`http://localhost:8080/${blog.imageURL}`);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem('authToken');

      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }

      await axios.put(`http://localhost:8080/blog/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Redirect back to the FullBlogPage after the update is successful
      navigate(`/dashboard/blog/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-blog-page">
      <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} placeholder="Enter title" />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          {existingImageURL && <img src={existingImageURL} alt="ExistingImage" className="existing-image" />}
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" rows="6" value={content} onChange={handleContentChange} placeholder="Enter content"></textarea>
        </div>
        <button className='update-button' type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlogPage;
