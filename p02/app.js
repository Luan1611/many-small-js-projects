const celsius = parseFloat(prompt('Enter the temperature in Celsius: '))

const fahrenheit = (celsius * 9/5) + 32
const msg = `The temperature in Fahrenheit is ${fahrenheit.toFixed(2)} degrees`
alert(msg)