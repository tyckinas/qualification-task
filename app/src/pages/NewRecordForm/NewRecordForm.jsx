import React, {useState} from "react";
import { useFormik } from "formik";
import axios from "axios";
import './NewRecordForm.css'

const NewRecordForm = () => {
  const [newPost, setNewPost] = useState({});
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:3000/posts", values)
      .then(data => setNewPost(data.data))

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

export default NewRecordForm;
