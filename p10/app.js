const numberList = document.getElementById('numberList')
const fruitsList = ['Orange', 'Banana', 'Apple', 'Melon', 'Strawberry']

for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement('li')
    listItem.textContent = fruitsList[i-1]
    numberList.appendChild(listItem)
}