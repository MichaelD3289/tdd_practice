export default function fizzbuzz(n: number): string {
  let result = ''

  if (n % 3 === 0) {
    result += 'Fizz'
  }

  if (n % 5 === 0) {
    result += 'Buzz'
  }

  // if result is still an empty string we will return original number as a string
  return result || n + result
}
