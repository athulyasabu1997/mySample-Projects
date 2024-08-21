import React, { useEffect, useState } from "react";

function fetchApi() {
  const [data, setData] = useState(null);
  // Using promise and axios
  useEffect(() => {
    const fetchDataAxios = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.log("error while fetching", error);
        });
    };

    fetchDataAxios();
  }, []);

  // Using promise and fetch
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("response is not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    fetchData();
  }, []);
  // Using fetch and async,await
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData1();
  }, []);
  // Using axios and async,await
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData2();
  }, []);
  return <div></div>;
}

export default fetchApi;
