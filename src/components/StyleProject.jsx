import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div>HEAD 1</div>
        <div>HEAD 2</div>
        <div>HEAD 3</div>
      </div>
      <div>
        {/* inline style */}
        {/* <p style={{ color: "blue", background: "yellow" }}> */}
        <p>
          ReactJS, often simply referred to as React, is a popular JavaScript
          library for building user interfaces, particularly single-page
          applications where you need a dynamic and responsive user experience.
          It was developed by Facebook and is now maintained by a community of
          developers along with Facebook.
        </p>
        <div>
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
