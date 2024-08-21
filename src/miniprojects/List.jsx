import { useEffect } from "react";
import "./App.css";

function List() {
  // using react fetch
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
    };
    fetchData();
  }, []);
  // using axios.get
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const responsedata = await axios.get(url);
      } catch (error) {
        console.error(error, "Error in fetching data");
      }
    };
    fetchDatas();
  }, []);
  //using fect for post
  const name = "Athulya";
  const putData = async (event) => {
    event.preventDefault();
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application.json",
      },
      body: JSON.stringify({ name }),
    });
  };
  return <div></div>;
}
export default List;
