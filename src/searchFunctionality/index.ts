import cities from './cities'

function searchCities(query: string): string[] {
  if (query === '*') {
    return cities
  }

  if (query.length < 2) {
    return []
  }

  query = query.toLowerCase()

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(query)
  )

  return filteredCities
}

export default searchCities
