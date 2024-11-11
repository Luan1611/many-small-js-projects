
const value = parseFloat(prompt('Digite o valor da conta: '))
const tip = parseFloat(prompt('Digite a gorjeta (decimal)%: '))

const finalValue = value + (value * tip/100)

alert('O valor total com gorjeta é de $' + finalValue)