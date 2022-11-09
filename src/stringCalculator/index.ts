function stringCalculator(numstring: string): any {
  const emptyString = !numstring
  if (emptyString) {
    return 0
  }

  const lastElementisNaN = isNaN(parseInt(numstring[numstring.length - 1]))
  if (lastElementisNaN) {
    throw new Error('Invalid format')
  }

  const onlyOneNumberInString = !numstring.includes(',')
  if (onlyOneNumberInString) {
    return parseInt(numstring)
  }

  // const subString = numstring.substring(2, numstring.lastIndexOf('\n'))

  // format 1,3,2\n5 -> split on "," rejoin on "\n" and split again on "\n" to remove all seprators and then map over and parse integers.
  const numArray = numstring
    .split(',')
    .join('\n')
    .split('\n')
    .map((num) => parseInt(num))

  const sumOfNumArray = numArray.reduce((a, b) => a + b)
  return sumOfNumArray
}

export default stringCalculator
