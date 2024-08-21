import "./App.css";

function ArrayOp() {
  const arrayData = [1, 2, 3, 4];
  const data = arrayData.map((number) => number * 2);
  const filterdArray = arrayData.filter((number) => number%2 === 0)
  const reduceData = arrayData.reduce((accumulator,currentValue) => accumulator + currentValue,0)
  const findData = arrayData.find((number) => number% 2 === 0)
  const sumOfAllEventNumbers = arrayData.filter((numbers) => numbers % 2 === 0).reduce((accumulator,currentValue) => accumulator + currentValue,0)
  console.log(data)
  console.log(filterdArray)
  return <div></div>;
}
export default ArrayOp;