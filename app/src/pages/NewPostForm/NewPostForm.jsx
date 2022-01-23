import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./NewPostForm.css";

const NewPostForm = () => {
  const [newPost, setNewPost] = useState({});
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:3000/posts", values);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    },
  });

  return (
    <div className="form__container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form__input-field">
          <label htmlFor="title">Title</label>
          <textarea
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="form__input-field">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
        </div>

        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
