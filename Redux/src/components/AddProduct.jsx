import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Products/productsOperations";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(addPost({ title, body }));
      setTitle("");
      setBody("");
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Post</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postBody" className="block text-sm font-medium text-gray-700">
            Content:
          </label>
          <textarea
            id="postBody"
            name="postBody"
            value={body}
            onChange={onBodyChanged}
            rows="4"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onSavePostClicked}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
