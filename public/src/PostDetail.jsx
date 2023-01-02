import { useQuery } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(`https://`);
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(`https://`, { method: "DELETE" });
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(`https://`, {
    method: "PATCH",
    data: { title: "REACT QUER!" },
  });
  return response.json();
}
export function PostDetail({ post }) {
  const { data, isLoading, isError, error } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );

  if (isLoading) {
    return <h3>Loading</h3>;
  }

  if (isEroor) {
    return (
      <>
        <h3>Error</h3>
        <p>{error.toString()}</p>
      </>
    );
  }
  return (
    <>
      <h3>{post.title}</h3>
      <button>Delete</button> <button>update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}></li>
      ))}
    </>
  );
}
