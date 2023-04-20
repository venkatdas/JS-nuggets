
//Map

const people = [

    {
        name: "Rob",
        age: 25,
        job: "Teacher"
    },

    {
        name: "BOb",
        age: 25,
        job: "Mechanic"
    },
    {
        name: "Roddie",
        age: 28,
        job: "Engineer"
    }

]

const liveData = people.map((item) => { // item is a callback function and it could be antything with name like value
   return{
    firstName: item.name.toUpperCase(),
    ages:item.age+20
   }
    
});
console.log(liveData)

// to find unique values we are using new Set() Method that has described below
const names=[
    {
        name:"Ravi",
        job:"software"
    },
    {
        name:"murali",
        job:"software"
    },
    {
        name:"das",
        job:"software"
    },
    {
        name:"Ravi",
        job:"engineer"
    }
]

const allNames= [...new Set (names.map((value)=>value.job))]
console.log(allNames);



// filter method return new array and manipulates the original size of the array , it returns based on some condition.

const students=[
    {name:"Aryan", subject:"Maths",age:"22"},
    {name:"Das", subject:"English",age:"25"},
    {name:"Harshita", subject:"Maths",age:"28"},
    {name:"Maxmiller", subject:"Social",age:"30"}
]

totalStudents =students.filter((frequentName)=>frequentName.subject==="Hidis")
console.log(totalStudents);


// find method
//find method returns single instance(object) ,returns first match , if no match - undefined

oldPerson= students.find((person)=> person.age<30)

console.log(oldPerson)

// What if you don't find the name oor field that you are looking for you'll get the undefined value.

const noValue= students.find((value)=>value.name==="Krishna")
console.log(noValue);



// Reduce

//The reduce method is a higher-order function 
//in JavaScript that allows you to iterate over an array and accumulate a single value based on the elements of the array. 

// Reduce iterates over the array and returns the single accumulated value
// reduce method takes the callback fucntion () that has two parameters accumulator and current value.

const fruits =[

    {name:"orange",country:"india", cost:100},
    {name:"Apple",country:"india", cost:300},
    {name:"Banana",country:"india", cost:20},
    {name:"Kivi",country:"india", cost:350}
]

const totalCost= fruits.reduce((accum,current)=>{
    accum+=current.cost;
    return accum;

},0)

console.log(totalCost)

// another example on reduce

const mobiles=[
    {brand:"apple",totalCount:3,cost:599.98},
    {brand:"Samsung",totalCount:2,cost:599.8},
    {brand:"Oneplus",totalCount:3,cost:899}
]


let reportOfItems= mobiles.reduce((total,current)=>{
  const  {totalCount, cost}=current;
  total.totalCountOfMobiles+=totalCount;
  total.totalCostOfMobiles+=cost * totalCount;

   return total; 
},{totalCountOfMobiles:0,totalCostOfMobiles:0})
//totalCostOfMobiles= totalCostOfMobiles.toFixed(1)

console.log(reportOfItems);


console.log(1)

//Array Destructuring 

//faster/easier way to access/unpack variables from arrays , objects

const friends=["venkat","das","kvd","harshita","sai"]

const name1=friends[3];
console.log(name1)

const [venkat,,n3,n4,n5,n6]=friends

console.log(venkat,n3,n4,n5,n6)


let fName="venkat";
let lName="das";
//Swaping

// const temp=lName;
// lName=fName;
// fName=temp;

//Swaping using distructon of array
[fName,lName]=[lName,fName]

console.log(fName,lName)

// Object Destructuring 

const harshita={
    first:'Harshita',
    last:"Gurram",
    city:"Chirala",
    siblings:{
        brother:"Nikhil",
    },
};

// const firstName=harshita.first;

// const siblingName=harshita.siblings.brother;

const {first,last,city, siblings:{brother:siblingName}}=harshita

console.log(first,last,city,siblingName)

//Rest Operator

// It gathers or collect the items 
//destructing the functions  
// placement important will place the rest operator at the end of the function

// When we rest we are going to declare the function
// Whe we use Spread we are going to the invoke the function

//Rest array example
const movies=["Real Steel","John Wick","Shashawnk Redemption","Fight Club"];

const[one,two, ...restOfMovies]=movies;
console.log(one, two,restOfMovies)

const specificMovie= restOfMovies.find((movie)=>movie==="Fight Club");

console.log(specificMovie)

//rest object example

const laptops=[
    {name:"dell",year:2000, country:"USA"},
    {name:"Lenovo",year:2015,country:"Korea"}
]
const [dell,...restOfLaptops]= laptops;

console.log(dell,restOfLaptops)


const rest1=[1,2,3,4,5];
const rest2=[6,7,8,9]
combinearr=[...rest1 ,...rest2]
console.log(combinearr)



//spread operator

//Allows and iterable to spread/expand individually inside receiver

// split into single items and copy them

const udemy="udemy";
const newUdemy =[...udemy];
console.log(newUdemy)

const faculty={name:"suitha",topic:"English",country:"india"}
console.log(faculty);

const newFaculty={...faculty, city:"Hyderabad", name:"Rita"};
console.log(newFaculty)



let x=3;
y=x++;
console.log(y)
y=y+1;
console.log(y)


const someName="adas";


const result=someName.charAt(0).toUpperCase()+someName.slice(1).toLowerCase ();
console.log(result);

//im writing the code in laptop and how to record that and add voice explanation also to upload in youtube


//Array.from


const someOtherName="venkatdas"

console.log(Array.from(someOtherName));


//Optional Chaining


// We are working with deeply nested objects 

const differentData=[
    {name:"venkatdas",
    location:{street:"Temple Road",timezone:{offset:"9:00PM"}},

    },
    {name:"manu",location:{street:"New Friends Colony"}},

]

differentData.forEach((persons) => {

  
   // console.log(namess.name.location.street) 

    // console.log(persons.name &&
    //     persons.location &&
    //     persons.location.street &&
    //     persons.location.street.timezone)

    console.log(persons?.location?.street?.offset||"Hellwoild")
});


//Call back function 
/**
 * * This is the definition of callback function
 * ? Essentially callback function is a function that we pass as a parameter later we will execute 
 * 
 * 
 * 
 */


function getResults(value){
    console.log(value.toUpperCase())
}

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}



function callbackFunction(name,callback){
  const fullName=  `${name} das`
    callback(fullName)
}


callbackFunction('venkat',getResults)

callbackFunction('Harshita',reverseString)

// function callbackFunction(value){
//    // console.log(value.toUpperCase())
//    console.log(value+"das")
// }

// //callbackFunction('venkatdas')

// function getOutput(name,cb){
//    // const fullName=`${name} das`
//    console.log(name+"das")
//     cb()
// }

// getOutput('venkat',callbackFunction)

 function fetchData(callback){

    setTimeout(()=>{
        callback('Data received')
    },3000)
    
 }   

 fetchData(function (data){
    console.log(data)
 })


 /**
  * ?CallbackHell
  */

 const  color1 = document.querySelector('.first')
 const  color2 = document.querySelector('.second')
 const  color3 = document.querySelector('.third')

 const btn =document.querySelector('.btn')

 btn.addEventListener('click',()=>{
    setTimeout(()=>{
    color1.style.color='red'
    },2000)
 })



























