import passwordValidator from './index'

describe('password validator', () => {
  test('function returns correct object', () => {
    // arrange
    const data = '12@4578'
    // act
    const { valid, error } = passwordValidator(data)
    // assert
    expect(typeof valid).toBe('boolean')
    expect(typeof error).toBe('string')
  })

  test('returns error message if shorter than 8 characters', () => {
    // arrange
    const dataA = 'P@s12'
    const dataB = '123@56A'

    const expected = {
      valid: false,
      error: 'Password must be at least 8 characters',
    }
    // act
    const responseA = passwordValidator(dataA)
    const responseB = passwordValidator(dataB)
    // assert
    expect(responseA).toEqual(expected)
    expect(responseB).toEqual(expected)
  })
  test('password must contain at least 2 numbers', () => {
    // arrange
    const dataA = 'pAsS$ord'
    const dataB = 'pAs$word12'
    // act
    const responseA = passwordValidator(dataA)
    const responseB = passwordValidator(dataB)
    // assert
    expect(responseA).toEqual({
      valid: false,
      error: 'The password must contain at least 2 numbers',
    })
    expect(responseB).toEqual({ valid: true, error: '' })
  })

  test('can handle multiple validation errors', () => {
    // arrange
    const data = '*A3'
    const dataB = '1a'
    // act
    const response = passwordValidator(data)
    const responseB = passwordValidator(dataB)
    // assert
    expect(response).toEqual({
      valid: false,
      error:
        'Password must be at least 8 characters\nThe password must contain at least 2 numbers',
    })
    expect(responseB).toEqual({
      valid: false,
      error:
        'Password must be at least 8 characters\npassword must contain at least one capital letter\npassword must contain at least one special character\nThe password must contain at least 2 numbers',
    })
  })
  test('password must contain at least one capital letter', () => {
    // arrange
    const failData = 'pass$ord12'
    const successData = 'PaSs$ord12'

    // act
    const failResponse = passwordValidator(failData)
    const successResponse = passwordValidator(successData)

    // assert
    expect(failResponse).toEqual({
      valid: false,
      error: 'password must contain at least one capital letter',
    })
    expect(successResponse).toEqual({ valid: true, error: '' })
  })
  test('password must contain at least one special character', () => {
    // arrange
    const failData = 'A12jdkdkd'
    const successData = 'Adj@kdli12'

    // act
    const failResponse = passwordValidator(failData)
    const successResponse = passwordValidator(successData)

    // assert
    expect(failResponse).toEqual({
      valid: false,
      error: 'password must contain at least one special character',
    })
    expect(successResponse).toEqual({ valid: true, error: '' })
  })
})
