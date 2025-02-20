
    /*const N:number=5;
    const yell:any []=[];
  for (let i=1; i<=N; i++){
  
    yell.push(i);

  }
  const newYell=yell.reduce((a,b)=> a+b);
  /*console.log(newYell);*/

  /*function values(N:number):number{

    if(N%2 ===0){
        console.log( "Even");
    }else{
        console.log('Odd');
    }
    return N;
  }
  const newValues= values(10);*/
/*const N =10;
const lastVal =[]
const newNumbers = [];

for(let i=1; i<=N;i++){

    console.log(i)
    
    newNumbers.push(i)
  
}


console.log(newNumbers)
  
for(let i=1; i<=newNumbers.length; i++){
    if (newNumbers[i]%2!==0){

        lastVal.push(i)
        console.log(lastVal)
    }
}  console.log(lastVal)
const newSumeven = lastVal.reduce((a, b)=> a+b);

console.log(newSumeven)*/

function calculateSumEven(N:number):number{

    const lastVal =[]
    const newNumbers = [];
    
    for(let i=1; i<=N;i++){
    
       
        newNumbers.push(i)
      
    }
    
    
   /* console.log(newNumbers)
      
    for(let i=1; i<=newNumbers.length; i++){
        if (newNumbers[i]%2!==0){
    
            lastVal.push(i)
            
        }
    } 
    const newSumeven = lastVal.reduce((a, b)=> a+b);
    

    return newSumeven;
}

const myEven = calculateSumEven(10)
console.log(myEven)*/

