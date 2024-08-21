import "./App.css";

function FizzBuzz() {
  let result = []
const fizzBuzz = (number) => {
 
  for (let i =1;i<=number;i++){
    if(i%15 === 0){
      console.log("FizzBuzz")
      result.push("FizzBuzz")
    }
    if(i%3 === 0){
      console.log("Fizz")
      result.push("Fizz")
    }
    if(i%5 === 0){
      console.log("Buzz")
      result.push("Buzz")
    }
    else 
    {
      console.log(i)
      result.push(i)
    }
  }
}
  return <div>{fizzBuzz(20)}{result}</div>;
}

export default FizzBuzz;
