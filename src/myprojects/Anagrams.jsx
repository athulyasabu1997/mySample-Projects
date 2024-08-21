import "./App.css";

function Anagram() {
  const isAnagram = (str1,str2) => {
    const string1 = str1.split("").sort().join("")
    const string2 = str2.split("").sort().join("")
    return (string1 === string2)
  }
  return <div>{isAnagram("listen","silent") ? "Anagram" : "Not Anagram"}</div>;
}

export default Anagram;
