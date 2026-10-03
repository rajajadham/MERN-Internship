import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  return (
    <div className="page">
      <h1>Post Details</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
}

export default Post;