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
                <Link to="/newRecordForm">Users</Link>
              </li>
            </ul>
          </nav>
  
         
          <Routes>
            <Route exact path="/" element={ <ListPage />} />
             
            <Route path="/posts/:postId" exact element={ <DetailsPage />} />
             
              
            <Route path="/newRecordForm" element={<NewRecordForm/>} />
          </Routes>
        </div>
      </Router>
    )
}

export default Main
