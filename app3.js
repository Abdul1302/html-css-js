
const array=[3,4,5]

array[0]='Abdul Rehman'
console.log(array)

// Spread operator
let name=['Abdul']
let testName=[...name]

testName[0]='obaid'

console.log(name)

const fruits=['apple','mango','orange','banana','grapes']
const tempfruits=[...fruits]

console.log(tempfruits)
console.log(fruits.sort())

//toSorted

console.log(fruits.toSorted())

//Premitive can change the reference with let 

//Premitive can not change the reference with const but can change the value


const student={
    name:'Abdul',
    age:22
}
for (const key in student){
    console.log(student[key])
    
}

for (const key in student){
    console.log(student['name'])
    
}

// for loop
for(let i=0; i<=10; i++){
   console.log('Abdul Rehman')
}

// 2 table
for(let j=1; j<=10;j++){
    console.log(2*j)
}

//Pass By Value
// a=2
// b=a  ==> pass by value, pass by value : value can be manipulate or change .It is also known as premitive value

let a="obaid"
let b=a
console.log(a)
console.log(b)

b="umair"
console.log(a)
console.log(b)

//Pass By Reference
//a=[array]
// b=a  ==>pass by reference, , pass by reference : value can not be manipulate or change in reference..It is also known as non-premitive value
let i=[1,2,3]
let j=i

console.log(i)
console.log(j)

j.pop()

console.log(i)
console.log(j)

// object
const car={
    type:'Fiat',
    model:'500',
    color:'white'
}

const t='type'

// access value
console.log(car.type)
console.log(car["color"])

// Dynamic data changing
console.log(car[t])  

// dynamic ket making
car.hp=1200
console.log(car)

// delete type in car
delete car.type
console.log(car)

// Arethematic operators
const n1=2
const n2=4

console.log(n1*n2)
console.log(n1+n2)
console.log(n1-n2)
console.log(n1/n2)
console.log(n1%n2)

// if else condition
const n="Abdul"
const age1=2
const age2=3

//"==" check data type but not make any error
if(age1==age2){
    console.log("welcome")
}
else{
    console.log("not welcome")
}


//"===" check data type and make an error when data type change
if(age1===age2){
    console.log("welcome")
}
else{
    console.log("not welcome")
}

// assignment operator
// && operator
if(age1==age2 && n=='Abdul'){
    console.log("welcome")
}
else{
    console.log("not welcome")
}

// or operator
if(age1==age2 || n=='Abdul'){
    console.log("welcome")
}
else{
    console.log("not welcome")
}

// condition(ternary) operator
const name1="obaid"  
const welcome=name1!='obaid' ? console.log("welcome") : console.log( "not welcome")


// for loop


const data=['Abdul','Rehman','adnan','meer']
for (const i of data){
    console.log(i)
}


const data2=[
    {
        name:'obaid'
    },
    {
        name:'Abdul'
    },
    {
        name:'Aleem'
    },
    {
        name:'Aman'
    },

]
for(const element of data2){
    console.log(element)
}


