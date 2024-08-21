
function IsPalindrome() {
const isPlaindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return (reverseStr === str)
}

  return <div>{isPlaindrome("racecar") ? "Palindrome" : "Not palindrome"}</div>;
}

export default IsPalindrome;