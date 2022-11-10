function passwordValidator(password: string): {
  valid: boolean
  error: string
} {
  let valid = true
  let error = ''

  if (password.length < 8) {
    error += 'Password must be at least 8 characters'
  }

  if (password.toLowerCase() === password) {
    if (error !== '') {
      error += '\n'
    }
    error += 'password must contain at least one capital letter'
  }

  if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
    if (error !== '') {
      error += '\n'
    }
    error += 'password must contain at least one special character'
  }

  let countNum = 0
  for (const char of password) {
    if (!parseInt(char)) {
      continue
    } else {
      countNum++
    }

    if (countNum >= 2) {
      break
    }
  }

  if (countNum < 2) {
    if (error !== '') {
      error += '\n'
    }
    error += 'The password must contain at least 2 numbers'
  }

  if (error !== '') {
    valid = false
  }

  return { valid, error }
}

export default passwordValidator
