import greeting from './index'

describe('greeting', () => {
  test('returns "Hello, <name>" when passed name', () => {
    // arrange
    const data = 'Bob'
    // act
    const response = greeting(data)
    // assert
    expect(response).toBe('Hello, Bob.')
  })
  test('returns Hello, my friend when null value is passed in', () => {
    const response = greeting()
    expect(response).toBe('Hello, my friend.')
  })

  test('if name is uppercase return "HELLO, NAME!"', () => {
    const data = 'JERRY'
    const response = greeting(data)

    expect(response).toBe('HELLO JERRY!')
  })

  test('can handle multiple names', () => {
    const data = ['Jill', 'Jane']

    const response = greeting(data)

    expect(response).toBe('Hello, Jill and Jane')
  })
})
