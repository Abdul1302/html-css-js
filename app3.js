
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