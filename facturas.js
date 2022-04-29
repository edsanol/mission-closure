function Purchase (number, name, date, items) {
    this.number = number,
    this.name = name,
    this.date = date,
    this.items = items
}


const purchase01 = new Purchase (00,'Jackson Lite','01/01/2022',[{id: 00, price:'$ 10 USD', amount: 100}])

console.log(purchase01)
