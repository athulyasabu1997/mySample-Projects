

function RemoveDuplicates() {
  const originalArray = [
    "Daniel",
    "Lucas",
    "Gwen",
    "Henry",
    "Jasper",
    "Lucas",
    "Daniel",
  ];
  const removeDuplicate = (arr) => {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
  };
  return <div>{removeDuplicate(originalArray)}</div>;
}

export default RemoveDuplicates;
