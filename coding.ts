/*function sum(a: number, b: number): number{
    return a-b;
}
const sub=sum(10,5);
console.log(sub)*/
/*class Car{
    carName: string
    carModel: number

constructor (carName: string, carModel: number){
    this.carName= carName
    this.carModel= carModel
}
getFullCar(): string{
    return `${this.carName}, ${this.carModel}`;
 }
}
const newCar=new Car ('Toyota', 2022)
console.log(newCar)*/

class PrivatePerson {
    private secret: string;
  
    constructor(secret: string) {
      this.secret = secret;
    }
  
    getSecret(): string {
      return this.secret;
    }
  }
  const newP= new PrivatePerson('Alhamdulilah')
  console.log(newP)


