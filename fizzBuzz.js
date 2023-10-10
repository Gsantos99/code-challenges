var fizzBuzz = function (n) {
  answer = []
  for (let i = 1; i <= n; i++) {
    divisibleBy3 = i % 3 == 0
    divisibleBy5 = i % 5 == 0
    if (divisibleBy3 && divisibleBy5) {
      answer.push('FizzBuzz')
    } else if (divisibleBy3) {
      answer.push('Fizz')
    } else if (divisibleBy5) {
      answer.push("Buzz")
    } else {
      answer.push(i.toString())
    }
  }
  return answer
}

console.log(fizzBuzz(15))
