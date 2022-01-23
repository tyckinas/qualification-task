import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./NewPostForm.css";

const NewPostForm = () => {
  const [error, setError] = useState(null);
  const [isCreated, setIsCreated] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: async (values , {resetForm}) => {
      try {
        const res = await axios.post("http://localhost:3000/posts", values);
        resetForm({})
        setIsCreated(true)
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
            value={formik.values.title || ""}
          />
        </div>
        <div className="form__input-field">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.body || ""}
          />
        </div>

        <button type="submit">Create post</button>
        {
          isCreated ? <p className="form__">New post succesfully created</p> : ''

        }
      </form>
    </div>
  );
};

export default NewPostForm;
