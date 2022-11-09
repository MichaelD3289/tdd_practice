import stringCalculator from './index'

describe('string calculator', () => {
  test('takes empty string and returns 0', () => {
    // arrange
    const data = ''
    // act
    const response = stringCalculator(data)
    // assert
    expect(response).toBe(0)
  })
  test('takes one argument and returns itself', () => {
    // arrange
    const data = '12'
    // act
    const response = stringCalculator(data)
    // assert
    expect(response).toBe(12)
  })
  test('takes two arguments and adds them together', () => {
    // arrange
    const data = '1,2'
    // act
    const response = stringCalculator(data)
    // assert
    expect(response).toBe(3)
  })
  test('function should accept unknown number of arguments', () => {
    // arrange
    const data = '1,2,4,9,10,5'
    // act
    const response = stringCalculator(data)
    // assert
    expect(response).toBe(31)
  })
  test('function should accept newlines (\n) as seperators', () => {
    // arrange
    const data = '1,2,4\n9,5'
    // act
    const response = stringCalculator(data)
    // assert
    expect(response).toBe(21)
  })
  test('line seperator at end of string should return error', () => {
    // arrange
    const dataA = '1,2,4\n9,5,'
    const dataB = '1,2,4\n9,5\n'
    // act
    const responseA = () => stringCalculator(dataA)
    const responseB = () => stringCalculator(dataB)
    // assert
    expect(responseA).toThrowError('Invalid format')
    expect(responseB).toThrowError('Invalid format')
  })
  test.only('delimiter can be changed', () => {
    // arrange
    const dataA = '//;\n1;3'
    const dataB = '//sep\n2sep5'
    const dataC = '//|\n1|2|3'

    const dataD = '//|\n1|2,3'
    // act
    const responseA = stringCalculator(dataA)
    // const responseB = stringCalculator(dataB)
    // const responseC = stringCalculator(dataC)

    // const responseD = () => stringCalculator(dataD)

    // assert
    expect(responseA).toBe(4)
    // expect(responseB).toBe(6)
    // expect(responseC).toBe(7)

    // expect(responseD).toThrowError('Invalid format')
  })
})
