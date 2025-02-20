/*const myPromise=new Promise(async(resolve, reject) => {
    const data= myPromise(54);

    if(data){
        resolve(data);
    }else{
        reject(new Error('invalid parameter'));
    }
}catch (Error){
    reject (new Error ('Failed to fetch data!')); 
}
});*/
const numbers=[1,2,4,5,10];
const multiple=numbers.map((number)=>number*2);
/*console.log(multiple);
multiple.forEach((number)=>console.log(number));*/
const found=numbers.find((number)=>number<4);
/*console.log(found*2);*/
const index=numbers.indexOf(10);
/*console.log(index)*/
const include=numbers.includes(5);
/*console.log(include);*/
const slicedNum=numbers.splice(3,0);
//console.log(slicedNum);

/* let  array = [3, 5, 7, 8,]
 for(let i =array.length; i>=0; i--){
    console.log(array[i])

 }
 console.log(array)*/




const number:number[]=[2,4,6,8];
const tNumber=number.reduce((accumulator, current)=> accumulator-current,2);
/*console.log(tNumber);*/
function studentGrade( Grade: number ){


        if (Grade>=70 && Grade<=100){
            console.log('Grade is A and Excellent');
        }else if(Grade>=60 && Grade<=69){
            console.log('Grade is B and v.Good');
        }else if(Grade>=50 && Grade<=59){
            console.log('Grade is C and Good');
        }else if(Grade>=40 && Grade<=49){
            console.log('Grade is D and Fair');
        }else{
            console.log('Grade is F and Fail');
        }
   }
    const newGrade= studentGrade(50);
    console.log(newGrade);
