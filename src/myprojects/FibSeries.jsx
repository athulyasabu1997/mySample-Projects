import "./App.css";

function FibSeriesPattern() {
  const arr1 = [0,1];
const fibSeries = (n) => {
for (let i=2; i<n; i++) {
  arr1[i] = arr1[i-1] + arr1[i-2]
}
return arr1
}

  return <div>{fibSeries(8)}</div>;
}
export default FibSeriesPattern;
