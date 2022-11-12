import cities from './cities'
import searchCities from './index'
describe('search functionality', () => {
  test('returns all cities if query is less than 2 characters', () => {
    // arrange
    const data = ['', 'j']
    const toBe = [[], []]
    // act
    data.forEach((query, index) => {
      const response = searchCities(query)

      // assert
      expect(response).toStrictEqual(toBe[index])
    })
  })

  test('returns all city names that starting with search text', () => {
    const data = 'Va'

    const response = searchCities(data)

    expect(response).toStrictEqual(['Valencia', 'Vancouver'])
  })

  test('search is case insensitive', () => {
    const data = 'va'

    const response = searchCities(data)

    expect(response).toStrictEqual(['Valencia', 'Vancouver'])
  })

  test('works when search text is part of city name', () => {
    const data = 'ape'

    const response = searchCities(data)

    expect(response).toStrictEqual(['Budapest'])
  })

  test('if query is "*" return all city names', () => {
    const data = '*'

    const response = searchCities(data)

    expect(response).toStrictEqual(cities)
  })
})
