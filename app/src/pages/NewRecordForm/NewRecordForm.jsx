import React from "react";
import { useFormik } from "formik";

const NewRecordForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });

  return <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input 
      id="title"
      name="title"
      type="text" 
      onChange={formik.handleChange}
      value={formik.values.title}/>

<label htmlFor="body">Body</label>
      <input 
      id="body"
      name="body"
      type="text" 
      onChange={formik.handleChange}
      value={formik.values.body}/>

  <button type="submit">Paukst</button>
  </form>;
};

export default NewRecordForm;
