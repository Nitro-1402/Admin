import axios from "axios";
import React from "react";

const baseURL = "http://nitroback.pythonanywhere.com/movies/categories/";

export default function App() {
  const [ganre, setGanre] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${URL_API}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios.post(baseURL, {
        title: "horror!",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}