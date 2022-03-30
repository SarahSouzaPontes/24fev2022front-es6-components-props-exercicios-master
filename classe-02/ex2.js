const car = {
  name: 'Corolla',
  year: 2022,
  color: 'white'
}

const ownerContact = {
  phoneContact: "(00) 00000-0000",
  owner: 'Daniel',
}

const infosForSale = {
  ...car,
  phoneContact: "(00)00000-0000",
  ower: 'Daniel'
}

console.log(infosForSale);