import React from 'react'

function SumOfElementsArray() {
    const array1 = [1,2,3,4]
    const array2 = [5,4,3,2]
    const sum = array1.reduce((accumulator, currentValue, index) => {
 return accumulator + currentValue + array2[index]
    } ,0)
  return (
    <div>
      {sum}
    </div>
  )
}

export default SumOfElementsArray
