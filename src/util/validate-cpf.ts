export function validateCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false
  }

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i)
  }

  let remainder = sum % 11
  const checkDigit1 = remainder < 2 ? 0 : 11 - remainder

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i)
  }

  remainder = sum % 11
  const checkDigit2 = remainder < 2 ? 0 : 11 - remainder

  return (
    checkDigit1 === parseInt(cpf.charAt(9)) &&
    checkDigit2 === parseInt(cpf.charAt(10))
  )
}
