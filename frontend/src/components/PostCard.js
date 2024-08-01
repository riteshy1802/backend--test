import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="post-card">
    <h2>{post.title}</h2>
    <p>{post.content.slice(0, 100)}...</p>
    <Link to={`/post/${post._id}`}>Read More</Link>
  </div>
);

export default PostCard;
