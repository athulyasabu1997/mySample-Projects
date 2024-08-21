function FindLargest() {
  const findLargest = (array) => {
    return Math.max(...array);
  };
  return <div>{findLargest([2, 63, 45])}</div>;
}

export default FindLargest;
