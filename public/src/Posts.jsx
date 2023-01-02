import { useState } from "react";
import { useQuery } from "react-query";
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(`https://`);
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const { data, isError, error, isLoading } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
    }
  );
  if (isLoading) return <h3>Loading...</h3>;

  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

    return (
      <>
      <ul>
        {data.map((post) => (
          <li key={post.id}
          onClick{() => setSelectedPost(post)}
          >
            {post.title}
            </li>
        ))}
      </ul>
      <div>
        <button disabled={seturrentPage <= 1} onClick={() => {
          setCurrentPage((previousValue) => previousValue - 1);

        }}>Previous page</button>
        <span> {currentPage + 1}</span>
      </div>
      {selectedPost && <PostDetail post={selectedPost}/>}
        </>
    );
}
