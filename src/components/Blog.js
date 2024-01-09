import React from 'react';

const Blog = () => {
  // Mock data for blog posts
  const blogPosts = [
    { id: 1, title: 'Navigating Life Challenges', author: 'John Doe', date: '2023-02-01', content: '...' },
    { id: 2, title: 'Finding Peace in Daily Moments', author: 'Jane Smith', date: '2023-02-10', content: '...' },
    // Add more blog post entries as needed
  ];

  // Function to render a list of blog posts
  const renderBlogPosts = () => {
    return (
      <div>
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>By {post.author} on {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
 
      {/* List of Blog Posts */}
      <section>
        <h3>Latest Articles</h3>
        {renderBlogPosts()}
      </section>

      {/* Devotionals or Reflections */}
      <section>
        <h3>Devotionals and Reflections</h3>
        <p>
          Dive into meaningful reflections and devotionals to enrich your spiritual journey.
        </p>
      </section>

      {/* Testimonials or Church News */}
      <section>
        <h3>Testimonials and Church News</h3>
        <p>
          Discover uplifting testimonials and stay updated on the latest news within our church community.
        </p>
      </section>
    </div>
  );
}
export default Blog;
