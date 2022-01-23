import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import ListPage from "../../pages/ListPage/ListPage";
import NewRecordForm from "../../pages/NewRecordForm/NewRecordForm";

import Header from '../Header/Header';

const Main = () => {
  return (
    <Router>
    <Header />
       
      <Routes>
        <Route exact path="/" element={<ListPage />} />

        <Route path="/posts/:postId" exact element={<DetailsPage />} />

        <Route path="/newRecordForm" element={<NewRecordForm />} />
      </Routes>
    </Router>
  );
};

export default Main;
