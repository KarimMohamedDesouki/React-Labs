import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "../Products/productsOperations";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  let content;

  if (postStatus === "loading") {
    content = <p className="text-gray-500">Loading...</p>;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => (
      <div key={post.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-gray-700">{post.body}</p>
        <button
          onClick={() => handleDelete(post.id)}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ));
  } else if (postStatus === "failed") {
    content = <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Posts</h2>
      {content}
    </section>
  );
};

export default ProductDetails;
