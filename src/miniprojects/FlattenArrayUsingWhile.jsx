import React, { useState } from "react";
import "./App.css";

function FlattenWhile() {
  const flattenArray = (arr) => {
  const result = []
  let stack = [...arr]
  while(stack.length){
    let current = stack.shift()
    if(Array.isArray(current)){
      stack = [...current,...stack]
    } else{
      result.push(current)
    }
  }
  return result
  };
  return <div className="App"></div>;
}

export default FlattenWhile;
