import "./App.css";

function PrimeNumber() {
  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    if (number % 2 === 0) {
      return false;
    }
    if (number === 2) {
      return true;
    }
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  console.log(isPrime(4));
  return <div>{isPrime(13) ? "prime" : "not prime"}</div>;
}

export default PrimeNumber;
