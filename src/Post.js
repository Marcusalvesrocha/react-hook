import P from 'prop-types';

import { useEffect, useMemo, useState } from 'react';
import './App.css';

const CardPost = ({ post }) => {
  console.log('filho redenrizou');
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

CardPost.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function Post() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Post redenrizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
      </p>
      {useMemo(() => {
        return posts.length > 0 ? posts.map((post) => <CardPost key={post.id} post={post} />) : <p>Carregando posts</p>;
      }, [posts])}
    </div>
  );
}

export default Post;
