import romanToDecimal from './index'

describe('romanToDecimal', () => {
  test('takes a string and returns a number', () => {
    const data = 'MMVI'
    const response = romanToDecimal(data)

    expect(typeof response).toBe('number')
  })
})
