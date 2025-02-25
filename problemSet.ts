
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

    /*function factorial(N:number):number{

   
    const newNumbers = [];
    
    for(let i=1; i<=N;i++){
    
       
        newNumbers.push(i)
      
    }      
   
    const newFactorial = newNumbers.reduce((a, b)=> a*b);
    

    return newFactorial;
}

const myFactorial = factorial(5);
console.log(myFactorial);

function multiplicationTable(N:number):any{
    
  
    
   for(let i=1; i<= 10; i++) {
      const mathematics= i*N
    console.log(N, '*', i, '=', mathematics)
    
     
  
   }   
    
}

const myMultiplication = multiplicationTable(5);

function greaterThan(a:number,b:number, c:number):number{
    if(a>b && a>c){
        return a;
    }else if(b >a && b>c){
        return b;
    }else  return c;
    

}
const newGreater= greaterThan(60,50,15);
console.log(newGreater);*/

/*
function countDigits(n:number):any{
const arr:number[]=[];
for(let i=1; i<=n; i++){
    arr.push(i);
    console.log(arr);
}
console.log(arr.length);
}
const newCount=countDigits(5);
console.log(newCount)*/
/*
function countD(input: string): void{
    
    console.log(input.length);
}
const newInput=countD('12345');
console.log(newInput);*/
/*function primeNumbers(N: number):any{
    const arr:number[]=[];
    for(let i=2; i<=N; i++){
        for(let j=2; j<=i; j++){
            if(j%i===0 && j%j===0){
                arr.push(j);
            }
        }
    
    }
     return arr;
}
const newArr= primeNumbers(10);
console.log(newArr);*/

// Function to check if a number is prime

/*function palindromeChecker(Numbers:number):boolean{
        const arr:number[]=[];
        var  arrSecond: number[]=[];
        arr.push(Numbers);
        console.log(arr);
        for (let i=arr.length-1; i>=0; i--){
            arrSecond.push(arr[i]);
            console.log(arrSecond);

        if(arrSecond !== arr){
            
            return true;
        }else{
            return false;
        }
    }
}
    

const Palindrome=palindromeChecker(121);
console.log(Palindrome);*/

function test(): boolean{
let a=2;
let b=2;
if(a==b) {
return true;
}else {
    return false;
}
}
const newTest=test();
console.log(newTest);

