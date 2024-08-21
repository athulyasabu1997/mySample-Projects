

function ArrayIntersection() {
  const arrayIntersection = (arr1,arr2) => {
return arr1.filter(values => arr2.includes(values))
  }
  return <div>{arrayIntersection([1,2,3],[2,3,5,6])}</div>;
}

export default ArrayIntersection;