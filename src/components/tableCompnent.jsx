import React from "react";
import "./App.css";

function Table() {
  const people = [
    { name: "Alice", age: 25, height: "165 cm" },
    { name: "Bob", age: 30, height: "175 cm" },
    { name: "Charlie", age: 35, height: "180 cm" },
    { name: "David", age: 40, height: "170 cm" },
    { name: "Eva", age: 22, height: "160 cm" },
    { name: "Frank", age: 28, height: "185 cm" },
    { name: "Grace", age: 32, height: "162 cm" },
    { name: "Hannah", age: 29, height: "168 cm" },
    { name: "Ian", age: 33, height: "177 cm" },
    { name: "Judy", age: 27, height: "170 cm" },
  ];
  return (
    <div className="App">
      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Hieght</th>
          </tr>
        </thead>
        <tbody>
          {people.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
