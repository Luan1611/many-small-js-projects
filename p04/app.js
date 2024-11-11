const age = parseInt(prompt('Digite a sua idade: '))
const temTitulo = prompt('Você tem título de eleitor? (sim/não) ')
const minimumAge = 18

if (age >= minimumAge && temTitulo === 'sim') {
    alert('Pode votar')
} else if(age >= minimumAge && temTitulo === 'não') {
    alert('Precisa de título')
} else {
    alert('Não pode votar')
}