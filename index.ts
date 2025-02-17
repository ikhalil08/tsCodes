interface car{
    carName: string;
    engine: string;
    carColor: string;
    carModel: number;
}
   /*function displayCar(car): void {
    console.log(`${car.carName} ${car.engine}, ${car.carModel} is a beast`);
  }*/
let motor: car= {
    carName: 'Honda',
    engine: 'v6',
    carColor: 'Grey',
    carModel: 2019
};
/*displayCar(motor)*/
console.log(motor.carName, motor.engine, motor.carColor, 'is a beast');
/*console.log(motor)/*

/*function greeting(name: string, greeting?: string): string{
    name = 'i kaleel'
    if (greeting){
        console.log(`${greeting}, ${name}`);
    
    }else{
        console.log(`'Hello, ${name}'`);
    }

    return name; 
}
const newName=greeting('')
console.log(newName)*/