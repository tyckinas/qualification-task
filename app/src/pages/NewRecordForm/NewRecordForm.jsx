import React, {useState} from "react";
import { useFormik } from "formik";
import axios from "axios";

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
  console.log(newPost)

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="body">Body</label>
      <input
        id="body"
        name="body"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.body}
      />
  
      <button type="submit">Paukst</button>
    </form>
  );
};

export default NewRecordForm;
