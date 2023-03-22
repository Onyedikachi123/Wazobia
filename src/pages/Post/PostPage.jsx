import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import TextAreaCard from '../../components/TextAreaCard';
import './Post.css'

const Post = () => {
  const [text, setText] = useState('');
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [label, setLabel] = useState('Add Post title');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setPosts([{ id: Date.now(), text }, ...posts]);
      setText('');
    }
  };

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleLabelKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEditMode(false);
    }
  };

  return (
    <Card style={{margin: '50px auto', maxWidth: '700px'}}>
      <Card.Header style={{height: '30px'}}></Card.Header>
      <Card.Body>
      {editMode ? (
        <input
          type="text"
          className="text-area-label"
          value={label}
          onChange={handleLabelChange}
          onKeyDown={handleLabelKeyDown}
        />
      ) : (
        <div
          className="text-area-label"
          onClick={() => setEditMode(true)}
        >
          <b>{label}</b>
        </div>
      )}
    
      <TextAreaCard
        placeholder="Add content"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.text}
        </div>
      ))}
      </Card.Body>
    </Card>
  );
};

export default Post;