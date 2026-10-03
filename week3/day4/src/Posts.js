import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await res.json();

        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <h2>Fetching posts...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      {posts.map((post) => (
        <div key={post.id} style={box}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

const box = {
  padding: "10px",
  border: "1px solid #ccc",
  marginBottom: "10px",
  borderRadius: "5px",
};

export default Posts;