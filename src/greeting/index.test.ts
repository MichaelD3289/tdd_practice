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

  test('can handle two names', () => {
    const data = ['Jill', 'Jane']

    const response = greeting(data)

    expect(response).toBe('Hello, Jill and Jane.')
  })

  test(' can handle arbitruary number of names, seperate with commas and close with oxford comma', () => {
    const data = ['Amy', 'Brian', 'Charlotte']

    const response = greeting(data)

    expect(response).toBe('Hello, Amy, Brian, and Charlotte.')
  })

  test('allow mixing of normal and shouted names', () => {
    const data = ['Amy', 'BRIAN', 'Charlotte']

    const response = greeting(data)

    expect(response).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
  })
})
