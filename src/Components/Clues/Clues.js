import React, { Component, useContext, useEffect } from "react";
import { CluesContext } from "../Main";
const axios = require('axios');

/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/


const Clues = () => {

  const clues = useContext(CluesContext)
  console.log(clues);
  console.log(clues)


  return ( 
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div></div>
      <div></div>
      <div>tweede test</div>
    </div>
  );
};

export default Clues;
