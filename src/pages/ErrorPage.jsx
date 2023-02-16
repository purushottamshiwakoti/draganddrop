import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
    <div style={{margin:"100px 0 0 100px"}}>
    <div style={{display:"flex"}}>
     <h1>Error 404 |</h1>
      <p>Page not found</p>
     </div>
      <div style={{display:"flex"}}>

      <p style={{marginTop:50}}>Go back to Home</p>
      <NavLink to={'/'}>
      
        <button style={{marginTop:30,}}> Home</button>
      </NavLink>
      </div>
    </div>
    </>
  );
};

export default ErrorPage;
