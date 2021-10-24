import '../App.css';
import { useHistory } from "react-router-dom";
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Axios() {
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function createPost() {
      setLoading(true);
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
      setLoading(false);
  }
  if (loading) {
      return(
        <div>
        <h1>
            fuck 
        </h1>
      </div> 
      )
  }
  else if (!post) {
      return (
        <div>
          <button onClick={createPost}>Create Post</button>
        </div>
      );
  }
  

  else {return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );}
}