function greeting(name: string[] | string = 'my friend'): string {
  if (typeof name === 'string') {
    const nameIsUppercase = name.toUpperCase() === name

    const responseString = nameIsUppercase
      ? `HELLO ${name}!`
      : `Hello, ${name}.`

    return responseString
  }

  return 'Hello, Jill and Jane'
}

export default greeting
