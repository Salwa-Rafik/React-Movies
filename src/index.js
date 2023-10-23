import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppV1 from './AppV1';

// import StarRating from './StarRating';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppV1 />
    {/* <StarRating maxRating={5}/>
    <StarRating maxRating={10}/> */}
  </React.StrictMode>
);


