import "./App.css";

function App() {
  let setData = new Set()
  setData.add(1)
  setData.add(2)
  setData.add(3)
  console.log("set",setData)
  console.log("setSize",setData.size)
  console.log("setCheck",setData.has(1))
  setData.forEach((value)=>{
    console.log("foreach",value)
  })
  let setDataArray = [...setData]
  console.log("setDataArray",setDataArray)
  // use either one
  let anotherSetArray = Array.from(setDataArray)
  console.log("anotherSetArray",anotherSetArray)
  return <div></div>;
}
export default App;
