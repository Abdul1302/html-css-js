console.log('Hello World')

// String concatination
let fname= 'Abdul'
let lname= 'Rehman'

let fullname=fname+" "+lname

// Tempelate Literal
let fulname=`${fname} ${lname}`

console.log(fullname)
console.log(fulname)

let n1=12
let n2='12'
console.log(n1 + n2)

// Array
let fruits=['mango','apple']
console.log(fruits)
typeof fruits
console.log(Array.isArray(fruits))
console.log(fruits[0])

// update value
fruits[0]='kiwi'
fruits[6]='cherry'
console.log(fruits)

//Methods of the Array
console.log(length.fruits)

//push (put new element in last index)
fruits.push('orange')
console.log(fruits)

//pop  (remove last element from index)
fruits.pop()
console.log(fruits)

//shift (remove new element in first index)
fruits.shift()
console.log(fruits)

//unshift (put new element in first index)
fruits.unshift('banana')
console.log(fruits)

//Array concatination
const veg=['potato',]
console.log(veg)
const merged=veg.concat(fruits)
console.log(merged)

//Slice
const f= merged.slice(0,3)
console.log(merged,'merged Array')
console.log(f,'f_array')

//Splice ==> (delete from given index,number of elements to felete,put new element where we removed value)
merged.splice(2,0,'lemon')
console.log(merged)


//Object
const data={name:'abdullah',rollno:1234,class:'23-b'}
console.log(data)   

//Conditions
const flag1=undefined
const flag2='Abdul'
if(flag1){
    console.log('Welcome')
}
else if(flag2){
    console.log("World")
}
else{
    console.log("Hello")
}