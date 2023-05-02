const array = [1, 2, 3, 4, 5, 6, 9, 8, 9]
const array2 = [11, 2, 4, 4, 5, 6, 10, 8, -12]

function diagonalDifference(arr) {
  // Elementos
  let firstEl = arr[0]
  let secondEl = arr[Math.sqrt(arr.length) - 1]
  let thirdEl = 
  let fourthEl = 
  let fifthEl = 

  // Diagonais

  let diag1 = firstEl + thirdEl + fifthEl
  let diag2 = secondEl + thirdEl + fourthEl

  // Sempre positivo
  let diagonalDifference = (diag1 - diag2) * -1

  console.log(firstEl, secondEl, thirdEl, fourthEl, fifthEl)

  return diagonalDifference
}

console.log(diagonalDifference(array))
