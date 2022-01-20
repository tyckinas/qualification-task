import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import ListPage from '../../pages/ListPage/ListPage';
import NewRecordForm from '../../pages/NewRecordForm/NewRecordForm';
const Main = () => {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
             
              <li>
                <Link to="/new-record-form">Users</Link>
              </li>
            </ul>
          </nav>
  
         
          <Routes>
            <Route exact path="/" element={ <ListPage />} />
             
            <Route path="/postDetails/:postId" exact element={ <DetailsPage />} />
             
              
            <Route path="/new-record-form" element={<NewRecordForm/>} />
          </Routes>
        </div>
      </Router>
    )
}

export default Main
