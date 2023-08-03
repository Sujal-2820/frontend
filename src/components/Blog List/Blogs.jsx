import React from 'react';
import "./Blogs.css";


function BlogList() {

    return(
        <>
        <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuMv1PkiPShBS5NL3qPytdR1N7Uvhx0i7oQ&usqp=CAU" alt="Blog Cover" className="blog-image" />
            <div className="blog-content">
                <h3 className="blog-title">Blog Title</h3>
                <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ligula in augue cursus ultrices. Integer et sagittis risus, eu gravida lectus. Duis id hendrerit leo. Integer eu faucibus enim, id suscipit purus. Vivamus ac eleifend metus, ac posuere justo. Sed pharetra fringilla massa, in blandit arcu iaculis non. Nulla ac urna eleifend, consequat mi vitae, bibendum neque. Aliquam semper elit a nulla consectetur lacinia.
                </p>
                <a href="/" className="blog-link">Read More</a>
            </div>
        </div>

        <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuMv1PkiPShBS5NL3qPytdR1N7Uvhx0i7oQ&usqp=CAU" alt="Blog Cover" className="blog-image" />
            <div className="blog-content">
                <h3 className="blog-title">Blog Title</h3>
                <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ligula in augue cursus ultrices. Integer et sagittis risus, eu gravida lectus. Duis id hendrerit leo. Integer eu faucibus enim, id suscipit purus. Vivamus ac eleifend metus, ac posuere justo. Sed pharetra fringilla massa, in blandit arcu iaculis non. Nulla ac urna eleifend, consequat mi vitae, bibendum neque. Aliquam semper elit a nulla consectetur lacinia.
                </p>
                <a href="/" className="blog-link">Read More</a>
            </div>
        </div>

        <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuMv1PkiPShBS5NL3qPytdR1N7Uvhx0i7oQ&usqp=CAU" alt="Blog Cover" className="blog-image" />
            <div className="blog-content">
                <h3 className="blog-title">Blog Title</h3>
                <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ligula in augue cursus ultrices. Integer et sagittis risus, eu gravida lectus. Duis id hendrerit leo. Integer eu faucibus enim, id suscipit purus. Vivamus ac eleifend metus, ac posuere justo. Sed pharetra fringilla massa, in blandit arcu iaculis non. Nulla ac urna eleifend, consequat mi vitae, bibendum neque. Aliquam semper elit a nulla consectetur lacinia.
                </p>
                <a href="/" className="blog-link">Read More</a>
            </div>
        </div>
        </>
    );

}

export default BlogList;





//   return (
//     <div className="blog-list">
//       <h2>Blog List</h2>
//       <ul>
//         {blogs.map((blog, index) => (
//           <li key={index}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );