import React from "react";
import "./Blog.css";
import img1 from "../../assets/imggg3.png"; 
import img2 from "../../assets/imggg1.png";
import img3 from "../../assets/imggg2.png";

const blogPosts = [
  {
    id: 1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    image: img1,
  },
  {
    id: 2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
    image: img2,
  },
  {
    id: 3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
    image: img3,
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-header">
        <h2>✺ Blog</h2>
        <a href="#">View All</a>
      </div>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="read-btn">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;


