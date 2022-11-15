import romanToDecimal from './index'

describe('romanToDecimal', () => {
  test('takes a string and returns a number', () => {
    const data = 'I'
    const response = romanToDecimal(data)

    expect(typeof response).toBe('number')
  })

  test('will return 0 if invalid numeral', () => {
    const data = 'MDULX'

    const response = romanToDecimal(data)

    expect(response).toBe(0)
  })

  test('passing in one symbol returns correct value', () => {
    const data = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const expectedOutput = [1, 5, 10, 50, 100, 500, 1000]

    data.forEach((e, i) => {
      const response = romanToDecimal(e)

      expect(response).toBe(expectedOutput[i])
    })
  })

  test('numerals are case insensitive', () => {
    const data = ['i', 'v', 'x', 'l', 'c', 'd', 'm']
    const expectedOutput = [1, 5, 10, 50, 100, 500, 1000]

    data.forEach((e, i) => {
      const response = romanToDecimal(e)

      expect(response).toBe(expectedOutput[i])
    })
  })

  test('numerals are added together', () => {
    const data = ['MD', 'MMVI', 'LXVI']
    const expectedOutput = [1500, 2006, 66]

    data.forEach((e, i) => {
      const response = romanToDecimal(e)

      expect(response).toBe(expectedOutput[i])
    })
  })

  test('if smaller value precedes large value it is subtracted from large value and added to total', () => {
    const data = 'MCMXLIV'

    const response = romanToDecimal(data)

    expect(response).toBe(1944)
  })
})
