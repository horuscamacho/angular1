const username: string | number = "horusinhue";
const sum = (a: number, b: number) => {
  return a + b;
}

sum(2, 3);

class Person {
  constructor(public age: number, public lastName: string){
  }
}

const nico = new Person(36, "Camacho")
nico.age
