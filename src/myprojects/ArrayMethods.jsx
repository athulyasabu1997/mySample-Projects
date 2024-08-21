import React from "react";
import "./App.css";

function ArrayMethods() {
  const names = ["Athulya", "Athira", "Vedhika"];
  const age = [26,30,3]
  const arrayData = [[1,2],[3,4],[5,6]]
  const students = ["Athulya", "Athira", "Vedhika","Mini","Ushar"];
  names.forEach((item) => {
    console.log(item);
  });
  return (
    <div>
      <p>{names.toString()}</p>
      <p>{names.join("*")}</p>
      <p>Length of array : {names.length}</p>
      <p>Sorted array : {names.sort()}</p>
      <ul>
        {names.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>push method returns the new array length : {names.push("Mini")}</p>
      <p>pop method return removed element : {names.pop()}</p>
      <p>{names.shift()}</p>
      <p>{names.unshift("Ushar")}</p>
      <p>{names.concat(age)}</p>
      <ul>
        {names.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>{names.copyWithin(2,0)}</p>
      <p>{names.copyWithin(1,0,1)}</p>
      <p>{arrayData.flat()}</p>
      <p>toSpliced creturn new array : {students.toSpliced(2,0,"Sabu","Cin")}</p>
      <p>{students.splice(2,0,"Sabu","Cin")}</p>
      <ul>
        {students.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>{students.splice(0,1)}</p>
      <ul>
        {students.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>{students.slice(1)}</p>
      <p>{students.slice(1,3)}</p>
    </div>
  );
}
export default ArrayMethods;
