import fizzbuzz from './index'

describe('fizzbuzz', () => {
  test('takes number as argument and returns correct string', () => {
    // arrange
    const data = [1, 2, 3, 5, 9, 10, 15]
    const expected = ['1', '2', 'Fizz', 'Buzz', 'Fizz', 'Buzz', 'FizzBuzz']

    // act
    data.forEach((e, i) => {
      const response = fizzbuzz(e)

      // assert
      expect(response).toBe(expected[i])
    })
  })
})
