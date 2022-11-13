function greeting(name: string[] | string = 'my friend'): string {
  if (typeof name === 'string') {
    const nameIsUppercase = name.toUpperCase() === name

    const responseString = nameIsUppercase
      ? `HELLO ${name}!`
      : `Hello, ${name}.`

    return responseString
  }

  if (Array.isArray(name)) {
    let shoutedName = ''
    const normalNames: string[] = []

    name.forEach((n) => {
      if (n.toUpperCase() === n) {
        shoutedName = n
        return
      }
      normalNames.push(n)
    })

    let nameConcat = ''
    normalNames.forEach((n, index) => {
      if (index === 0 && normalNames.length === 2) {
        nameConcat += n + ' '
        return
      }

      if (index === normalNames.length - 1) {
        nameConcat += `and ${n}.`
        return
      }

      nameConcat += `${n}, `
    })

    if (shoutedName !== '') {
      nameConcat += ` AND HELLO ${shoutedName}!`
    }

    return `Hello, ${nameConcat}`
  }

  return ''
}

export default greeting
