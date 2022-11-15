const romanNumeralsKey: {
  I: number
  V: number
  X: number
  L: number
  C: number
  D: number
  M: number
} = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

type OnlyKeys = keyof typeof romanNumeralsKey

function romanToDecimal(numerals: string): number {
  const upperNumerals = numerals.toUpperCase()

  const value = calculateNumeralValue(upperNumerals)

  return value
}

export default romanToDecimal

function calculateNumeralValue(numerals: string) {
  const validNumerals = Object.keys(romanNumeralsKey)

  let total = 0
  let lastNumeral = 9999

  for (const numeral of numerals) {
    if (!validNumerals.includes(numeral)) {
      return 0
    }

    const currentNumeralValue = romanNumeralsKey[numeral as OnlyKeys]

    if (lastNumeral < currentNumeralValue) {
      // lastNumberal is multiplied by two because it was added in the prior loop and so thats needed to subtract itself before applying to current loop

      total += currentNumeralValue - lastNumeral * 2
    } else {
      total += currentNumeralValue
    }

    lastNumeral = currentNumeralValue
  }

  return total
}
