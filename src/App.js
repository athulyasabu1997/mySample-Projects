import React, { useState } from "react";
import "./App.css";

function App() {
  const flattenArray = (arr) => {
    let result = []
    arr.forEach(element => {
      if(Array.isArray(element)){
        result = result.concat(flattenArray(element))
      }else{
        result.push(element)
      }
    })
    return result
  }
  return <div className="App"></div>;
}

export default App;
