import "./App.css";

function Duplicates() {
  let duplicates = [];
  let setData = new Set();
  const findDuplicates = (array) => {
    for (let item of array) {
      if (setData.has(item)) {
        duplicates.push(item);
      } else {
        setData.add(item);
      }
      console.log(duplicates);
      console.log(setData);
    }
  };

  const findDuplicatesUsingFilter = (array) => {
    return array.filter((item, index) =>
      array.indexOf(item !== index && array.indexOf(item) === index)
    );
  };

  return <div>{findDuplicates([1, 2, 3, 4, 3, 4, 5])}</div>;
}
export default Duplicates;
