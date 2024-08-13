"use strict";
console.log("Actions speaks louder than the words");

// var let const are used to declare variable
// const -> block scope and can't be reinititalize after declaration
// let -> block scope and can be re-intitalize after declaration
// var -> fuction scope and can be re-intialize after declaration

// -> typeof is used to check the  date type of an variable
// let a = 10
// console.log(typeof(a))

// for bettter practice use const on first priority then let
// not to use var

// alert(3+4); -> not allowed due to this is an node js. not a browser and alert is browser window object
//

//emca is javasript standerd set for js
// mdn document is an usefull to learn the front-end

//data types is js

/* javasript has 7 primitive data types 
Number	-> JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754.
String ->	JavaScript Strings are made up of a list of characters, essentially an array of characters.
Boolean ->	Represents a logical entity and can have two values: true or false.
Null -> This type has only one value: null.
Undefined ->	A variable that has not been assigned a value is undefined.
Symbol ->	Symbols return unique identifiers that can be used as property keys in objects without colliding with other keys.
BigInt ->	BigInt is a built-in object providing a way to represent whole numbers larger than 253-1.
*/

//non-primitive data type include
// Object -> JavaScript objects are fundamental data structures used to store collections of data.

// ***** Data conversion ********
// to convert one type of data into another type we use as Number, String, Objec Boolean, Bigint etc

// for example
// let score = "dshfh33"
// console.log(score)
// console.log(typeof score)
// this is an string type
// let inNumber = Number(score);
// console.log(inNumber)
// console.log(typeof inNumber)
// if the value is  not a pure numbr it will return Nan -> not a number
//for null  it will return 0 and bool - 01
// ""-> false and "adhk"-> true

// **********Operations************
// + - * / ** %

// console.log("1"+2+2);
// console.log(1+"4");//14
// console.log(1+5+"4");//64

// if the string come first then all the values will be converted to string
//if the string is last then consversion take place then converted to string

// console.log(+true)
// console.log(+false)
// return the 1/0

// prefix and suffix
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// **********comparison of datatypes***************
//problem come in comparing different data types
// console.log("2">1)
// console.log("02">1)
// some time it result in unpredictable results
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)//true
// the reason behind this is that equaity and conparison operator work differently
// comparison operator convert null to number. in this case null->0 therefore the (null>=0 true)and (null>0 is false)

// undefined is an NAN

// strict check === check the data type also
// console.log("2"==2)
// console.log("2"===2) false

// clean code

// ***********data types in javasript***********
// primitive and non primitive data types
// are catategorize based on call by value and call by reference means are they are stored and retrieve

// javasript is dynamically types langauge

// primitive data types (7)
// call by values
// string, number, boolean, NULL, undefined,Bigint,Symbol

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id ===anotherid)

// const bigNumber = 242232443443343423233n

// non- primitive data types
// reference data types
// arrays, Objects,Functions

// const heros = ["spiderman", "iron man","deadpool"];
// const  obj ={
//     name : "vishal",
//     age : 21,
// }
// const myFuction = function(){
//     console.log("hellow");
// }
// console.log(typeof id)

// key notes
// Null is an object
// function return function called as Object Fuction

// *************Stack and heap memory in javasript***********

// stack -> (primitive) -> call by value and copy is given
// heap-> (non - primitive) -> call by reference and directly manipulated

// ********************String in js*****************************

// modern days stirng concatination - string interpolation
// let name = "vishal"
// let repo = 0;
// console.log(`Hellow my name is ${name} , my repocount is ${repo}`)

// const gameName= new String("Vishal")
// console.log(gameName.__proto__)

// .length
// .toUppercase()
// .charAt(2)
// .indexOf('h')
// .substring(0,4)
// .slice(-8,4) -> negative values can be uesd in slice -> extract section of string
// .trim() -> remove all spaces -> trimstart, trimend -> works on space and line terminators
// .replace('Vi','-')
// .includes("shal")
// .split('-') -> divide the string take argument as separator and limit - it return an array of divided values
// .lastIndexOf(searchValue, fromIndex -> Returns the index within the calling String object of the last occurrence of the specified value.
// .valueOf(): -> Returns the primitive value of a String object.

// ***************** Number and Maths **********************
// const score = 300;
// console.log(score)
// const  balance   =  new Number(10000000.88);
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toPrecision(4)) //-> return a string
// console.log(balance.toLocaleString('en-IN'))

// Number.MIN_VALUE
// Number.MAX_VALUE
// also min and max safe integer

//  Math  library is by default in js;
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(3.4)) // -> ceil() and floor()
// console.log(Math.max(3,44,43,3,2))

// console.log(Math.floor(Math.random()*10)+1)

// const min =10;
// const max = 20;
// console.log(Math.floor(Math.random()*(max -min +1))+min)

// *************** Date and time in javasript ****************
// const date = new Date();
// console.log(date.toString())
// console.log(date.toLocaleDateString());
// console.log(date.toJSON())
// console.log(date.toLocaleString())
// console.log(date.toDateString())

// Date is an Object
//  let myCreateDate = new Date(2023,0,23,5,4)

//  console.log(myCreateDate.toLocaleString())

// let myDate = new Date("2023-02-23") -> YY//MM//DD
// let myDate = new Date("01-14-2023") -> MM/DD/YY

// console.log(myDate.toLocaleString())
// let myCreate = new Date("2023-1-23")
// let mytimestamp = Date.now();
// console.log(mytimestamp)
// console.log(myCreate.getTime())
// console.log(Math.floor(Date.now()/1000))

// let newDate  = new Date()
// console.log(newDate.getMonth()+1)
// console.log(newDate.getMinutes())

// console.log(newDate.toLocaleString('default',{
//     weekday : "long",
// }))

// ********************** Arrays **********************

// const myArr = [1,24,5,56,6,77,true,"vishal",[23,355,444,[2,44,4,3]]]
// const myHeros  = new Array(1,2,34,4,5,4)
// javascript arrray are resizable and can contain mix data types values
// javascipt arrray create a Shallow copies ->  by references
// Deep copies did not share reference

// myArr.push(6) //add at last
// myArr.pop()//remove last element
// console.log(myArr)
// unshift -> insert element at starting index
// shift -> remove an element at start

// console.log(myArr.includes(9)) return false
// console.log(myArr.indexOf(24)) //return index

// const  newarr = myArr.join() //return an string
// console.log(typeof newarr)//string

// slice and splice
// console.log("A",myArr)
// slice
// const new1 = myArr.slice(1,3) // return a new array with values including from 1 < 3
// console.log("B", new1)
// console.log("result", myArr)

// const new2 = myArr.splice(1,3)// return an new array but include values from 1 <= 3 and remove the values from  orginal array
// // splice manipulate an array
// console.log("C",new2)

// console.log("result",myArr)

// array can take any data type even array and structure and make it as  single index
// push perform on an existing array
// Array.push(Array2)
// [1,2,244,["new","new2"]]

// its and problamatic situations
// this can be resolved by using concat and spred operator
// array.concat(array2) concat it with arrat return similier resuls ->
// concat return a new Array
// const neww = myArr.concat(myHeros)
// console.log(neww)

// spread operator is used to merge two arrays
// spread operator spread the Element in the array ->  ...array
// const all_heroes =[...myArr,...myHeros]
// console.log(all_heroes)

// if there are multiple array within array with depth and you want to have a single array then in this use Flat(depth)

// const real = myArr.flat(Infinity)
// console.log(real)

// when there are date coming form data face we need to iterate on it then we ues
// console.log(Array.isArray("hitesh")) //-> return an boolean values
// console.log(Array.from("hitesh"))//convert the given date type in array to iterate on it

// intersting case -> Object
// console.log(Array.from({name:"hitesh"}))
// let  score1 = 20;
// let score2 = 30;
// let score3 = 40;
//  console.log(Array.of(score1, score2,score3)) //-> return an array of an elements

// important topic isarray , from and of

// ******************** Objects ************************
// singleton Object
// ->when we declare object with constructer then it will be a singleton object
// ->when we declar object with literals then singleton object is not formed

// object stored values in Key and Values

// object literals
// const jsUser = {name: "vishal"} //-> Not a singleton : Declare using literals

// Object by Constructer
// Object.create

// object keys are stored in acually string like "name": "vishal"
// to access the structure values we can use this methods

// console.log(jsUser.name) -> this has the limitation when keys are defined as "Full name"
// console.log(jsUser["name"]) we can acces any values from this

const mySym = Symbol("keys");
const jsUser = {
  name: "vishal",
  age: 21,
  [mySym]: "newsym",
  greeting: function () {
    console.log(`Hellow js user , ${this.name}`);
  },
};

// console.log(jsUser[mySym])
jsUser.name = "Naresh";
// console.log(jsUser.greeting())

// Object.freeze(jsUser) //used to freez the object from manipulation
// singleton vs non singleton
// ->singleton insure single instance while non-sigleton allow mulpiple independant instance

const objw = new Object({ name2: "vishal" });

// console.log(objw)
// nexting can be done in Object
const newaa = {
  fullname: {
    first: "vishal",
    middle: " Sharad",
    Last: "borle",
  },
};

// console.log(newaa.fullname?.first)
// const Obj3 = Object.assign({}, objw, jsUser, newaa);
// console.log(Obj3);

// it is used to combined the Object -> like spread and concat
// but does not flaten the object

// mostly used the spread operator to merge the Objects and also array
// const Obj3 = { ...jsUser, ...newaa, ...objw };
// console.log(Obj3);

// const user = [
//   {
//     id: 2,
//     email: "vishal@gamil.com",
//   },
//   { id: 2,
//     email : "naresh@gmail.com"
//   },
// ];

// to acceess this we can use map and also check values by . user[0].email

// very important

// console.log(Object.keys(jsUser))
// console.log(Object.values(jsUser))
// console.log(Object.entries(jsUser))
// console.log(jsUser.hasOwnProperty('name'))

// ********************* Object destucturing  and  JSON ************************
const course = {
  coursename: "js in hindi",
  price: "999",
  courseinstructer: "hitesh",
};
// console.log(`${nasjfkskjsf}`)

// course.courseinstructer
// this is an destructuring
const { courseinstructer: instructer } = course; //-> when the same value is used multiple times
// console.log(instructer)

// react code
// const  navbar = (props.company) -> this syntax can be simplified as follow with the help of object derstructuring
// const navbar = ({company})=>{

// }

// navbar(company = "hitesh")
// APIS return json file later in this can be converted to Object to get date.
// the fetching can be done by accessing hierarhiy structure of the json file
// this is how the api return data
// {
//     "name" : "vihal",
//     "coursename" : "js in hindi",
//     "price": "free"
// }
// [
//     {},
//     {},
//     {}
// ]

// JSON formatter  website

// ******************* Function in JS***************
// function SayMyname(){
//   console.log("vishal")
// }

// // SayMyname -> this is an reference
// // SayMyname() -> this is an fuction calling and execution

// function addTwonumber( a , b){//this are parameter
//   console.log(a+b)
// }

// the problem arrives when we pass different data type without chacking
// for that we have to use if else conditon  to validate the data
// the conversion takes place at such case
// in this case checking is very imporatant

// addTwonumber(3,"v")//arguments

// function logInuser(username = "sam"){
//   if(!username){
//     console.log(`Please enter a username`)
//     return
//   }else{
//     return `${username} just logged in`
//   }
// }

// console.log(logInuser())

// const crypto = require('crypto');

// const input = "4666";
// const hash = crypto.createHash('sha256').update(input).digest('hex');

// console.log(hash)

// function check(prefix){
//   let nonce =0;
//   while(true){
//     let inputstr  = "100xdevs"+nonce.toString()
//     let  hash = crypto.createHash('sha256').update(inputstr).digest('hex');
//     if(hash.startsWith(prefix)){
//       return { inputt : inputstr,hasha : hash}
//     }
//     nonce++;
//   }
// }

// console.log(console.log(check("00000")))

// **************Fuction with object and array in Javasript*********************
// rest operator in js

function calculateCartPrice(val1, ...nums) {
  //this is an rest operator . it hold the values in array
  return nums;
}

// console.log(calculateCartPrice(2000, 202, 34));

// arrays and Object passing in fuctions with variable or direct and accesing it

// ************** Global scope and local scope in JS

// let -> Block Scope and Can be update
// const -> Block scope and Can't be update
// var ->  Global scope Mostly avoid it

// **************** Scope lavel hosting in javasript ********************
// console.log(addone(3)) //this type of declaration and access is not allowed due to this is stored in Variable
// const addone = function(Num){
//   return Num+1;
// }

// ************** Arrow function  and this  Keyword****************
// const user ={
//   username : "vishal",
//   price: 999,
//   welcomeMessage : function(){
//     console.log(`${this.username} , welcome to website`)
//     console.log(this)
//   }
// }

// user.welcomeMessage()
// user.username =" sam"
// user.welcomeMessage()

// function chai(){
//   let username = "hitesh"
//  console.log(this); this does not work for the Function
// }
// chai()

// const chai =()=>{
//   console.log(this)// {} does not work with function
// }

// chai()

const addTwo = (num1, num2) => num1 + num2; //this is an implicit return values
//  in this the return is not used it act implicitely return
const print = () => ({ name: "vishal" });
// console.log(print())

const addTwoo = (num1, num2) => {
  return num1 + num2;
  // in This syntax there should be a return statement to return values
};
// ****************** IIFE ******************
// immdiately invoke function expresssion
// ((name) => {
//   console.log(`my namw is ${name}`);
// })("Vishal"); //colon is need to terminate it

// *************** how does javasript execute the code and call stack ****************
// javasript execution context
// {} -> Global EC  -> this in windows this return an Windows object
// javasript is an single threaded object

// {} -> Global EC
// Function EC a
// Eval EC -> property of an global object
// {}-> 1-> Memory creation Phase
//      2-> Execution Phase

// executin face
// 1 => Global Executon -> this
// 2 => Memory phase - 1-> for variable undefined 2-> for function store the Defination
// 3 => Executin phase -> execute the code and assign values and when the fuctionn is needed to be run it create an new variable envirnoment for it + execution Thred and repeat the Memory phase and execution phase and return the uppper envirnoment and after this this executional context is deleted

//  stack
// three() -> executed First
// two() -> Follow lifo for the  function if it calls three()
// one() -> executed and remove
// Global execution
// *************Control FLow ***************

// const Vishal = "Vishal"
// console.log(Vishal)

// === strict check

// if Statement
// true enter false no enter
// if(0){
//code
// }

// if else statement
// if(){
//code
// }else{
//code
// }

// if else if statement
// if(){

// }
// else if(){

// }

// Break and continue

// switch statement

// switch(num){
//   case 1 : console.log("visal");
//           break;
//   case 1 : console.log("visal");
//           break;
//   default : console.log("visal");
// }

// Truty value and falsy values

// falsy value -> false , 0 , -0, Bigint 0n, null , undefined, NaN , ""

// truthy values -> true , "0",  'false' , " ", [], {}, function (){}

// if(arrry.length === 0){
//   console.log("empty")
// }
// to check array

// const Objw = {}
//  if(Object.keys(Objw).length ===0){
//   console.log("object is empty");
//  }

// false ==0;
// false ==""
// 0 ==""

// nullish Coalescing Operator (??) : Null and undefined
// let  val;
// val = undefined ?? 15
// val = null ?? 10 ?? 20
// console.log(val)

// ternary operator
// condition ? true : false
// const ice = 100;
// (ice < 80) ?console.log("less than 80") : console.log("greater than 80")

// ******************** Loops and break and continue ****************
// easy
// for(let i =0 ; i< 10 ; i++){
//   console.log("hellow")
// }

// intitalization
// while(conditon){
// updation
// }

// let i =0;
// do{
//   console.log("heellow")
//    i++;
// }while(i <5)

// ************************ high ordr array loops **************{**

// for of

// ["", "", ""]
// [{},{}, {}]

const arr = [1, 3, 4, 56, 667, 2];

// can be use for more use case than just iterating array
// string ,  Object , etc
// for(const val of arr){
//   console.log(val);
// }

// Maps data type in js
// Map hold an key-value pairs
// Maps stored Unique entries only

const map = new Map();
map.set("IN", "india");
map.set("UN", "united state");
map.set("FR", "France");

// console.log(map)

// for(const [key , val] of map){
//   console.log(key , val)
// }
//  ** Not work on OBJECT **
const myobject = {
  name: "Vishal",
  Role: "Web3 developer",
};
// for( const {key, val} of myobject){
//   console.log(key,val)
// }
// conclusion for of loop does not work on Objects

// for in loop
// for(const key in myobject){
//   console.log(`${key} shortcut is for ${myobject[key]}`)
// }

// for in loops take keys as their primary
// in array it print index and object it print keys  and i
// map is not iterable

// For each loop

// for loop is an high order fuction it is availble in array prototype

const arrr23 = [23, 4, 5, 4, 33, 34, 33, 32];

// for each expect an callback function to do task
// arrr23.forEach((item)=>{
//   console.log(item)

// })
// function printl(val){
//   console.log(val)
// }
// arrr23.forEach(printl)
// for each loop can take value , index , whole array as a parameter
// arrr23.forEach((val , index , arr)=>{
//        console.log(val, index, arr)
// })

// how to iterate on array of object
// arrr23.forEach((item)=>{
//   console.log(item.key)
// the item is treated as an object with key and values
// })

// ****************** Filter Map and reduce in Js ****************

// for each loop does not return values

const arr234 = [23, 4, 5, 4, 33, 34, 33, 32];
// filter method

// therefore the filter is used to return values from array it is simlier  foreach
// takes an call back function  also have parameter value , index and arr
// const val = arr234.filter((item)=>(item>40))
// console.log(val)
// it return the only match values

// it is very important to when we have to filter data coming from the database

// map method
// const val2 = arr234.map((item)=>{return item+10})
// console.log(val2)
// it tricky remember it

// chaining in JS

// calling multiple fuction on each other 

// let val = arr234.map((item)=>(item+10)).map((item)=>(item+5)).filter((item)=>(item>30))
// console.log(val)


// const num = [1,2,3]
// let numsvalue = num.reduce((accum,curre, arr)=>{
//   return accum+curre;
// }, 10)

// it is used to calculate sum of the values in array  or some mistly used in cart 

// console.log(numsvalue)

// **************************Dom manipulation *****************************

// Document Object model

// document is an windows Object model
// console.log(document)
// console.dir(document) //this print the info with windows object

// window -> Document -> HTML -> Head and Body
// elements and nodes can be selected and iterate and manipulated with the help of DOM manipulation

// ********************** All dom selectors and nOdelist and HTML Collection *********************
// document.getElementById('id')
// document.getElementById('id').id
// document.getElementById('id').classname

// document.getElementById('id').getAttribute('id || class')
// document.getElementById('id').setAttribute('id || class'to 'this mean class/id names ')

// title.style.backgroundColor = 'green'

// title.textcontent -> content all the test  including hidden
// title.innertext -> show only inner text which is visible
// title.innerHTML -> give the HTML ->the Html can be overwriten dynamically with the JS


// document.getElementsByClassName("heading")
// document.querySelector("#. and element") this return only one value which will come first
// document.querySelector('input[type ="password"]') => this select the password
// queryselector return a single element to which we can manipulate
//  NOTE -> all types of selector used in CSS are can be used here

// document.querySelectorAll('li') this return an Nodelist in form of similier to array and have the ForEach() to iterate on it
//queryselectorall return a NODE list 
//this can be iterate by using for each

// document.getElementsByClassName('name') this return a  HTML collection this is not itereable 
//  HTML collection should have to be converted into array to iterate over it
// Array.from(HTMLCollection) to convert

// ************************* How to create a New element in DOM ***********************
//  .childrean return an HTML Collection of the elemement inside a parent element
// firstelementchild and lastelement child return the first and last element in selected parent node

// .parentelement return the parent element of the child or selected node
//.nextElementSibling return the  sibling of the selected class

// parrent.childNodes return an Node list but it contain the extra tree in the tree
// child node is mostly used in react


// add new element in DOM

// const div = document.createElement('div')
// div.className = "main"
// div.id ="idd"
// attributs can be ->name , title, class, id, etc
// div.setAttribute("key","value")
// div.style
// div.style.backgroundColor
// div.style.padding
// div.innerHTML ="This will override the existing  if any text"
// const newnode = document.createTextNode("chai aur code")
// div.appendChild(newnode)

// ************************ Edit and remove element in DOM*************************

// function add(langname){
//     const li = document.createElement('li')
//     liW.appendChild(document.createTextNode(langname))
      // document.querySelector('.langauge').appendChild(li)
// }

// edit
// cosnt li = document.querySelector("li:nth-child(0)")
// li.innerHTML ="ghisdi" xx
// const newli = document.createelment("li")
// newli.textContent = "mojo"
// li.replacewith(newli)

// We can also change the outerHTML => "<li>thus</li>"

// remove
// const lastlang = document.querySelector('li:last-child')
// lastlang.remove()

// ************************ Events in javasript *****************
// 1-> using event in DIVS
// 2-> using .onlcick on selected element
// document.querselector("#id").onclick =()=>{
  // alert("hellow")
  // }
  // 3-> document.queryselector('#id').addEventListener('event', function(e){}, false)


// attachEvent() 
// jQuery - on
// this is modern approach to be used
// e is an event object
// broweser event and the envirnoment events
// the event is very powerfull and the event provide information about the envirnoment and the broweser event 
// the envirnoment iclude the position x and y cordinates of event and many more.like view of window, timeStamp

// it is very important to leran and master this 

// type of events
// timestamp
// defaultPrevented
// target , toElement SrcElement , currentTarget
// client X , client Y, sreenX and SreenY
// altkey,ctrlkey, shiftKey , and keyCode

// what is the False value -> that is an event propogation

// event propagation has two context event capturing and event bubbling

// false-> event bubbling -> bottom to top 
// true -> event capturing  -> Top  to bottom 

// sometimes we don't want to event to be propogated
// in such case -> is used
// event.stopPropagation

// event.preventDefault(); -> prevent the default action

// how to remove elements in the DOM on event

// first select div -> add event listener -> then select the event.target for the specific selection  then remove()

// document.querySelector("#images").addEventListener('click', function(e){
//     console.log(e.target.tagName);
//     if(e.target.tagName ==='IMG'){
//       console.log(e.target.id);
//       let removeit = e.target.parenNode
//       removeit.remove();
//       // removeit.parentNode.removeChild(removeit)
//     }
// })


// *************************** JavaScript Async Fundamental *****************

// javascript is an single threaded and Sychronous langauge -> default behaviours
// Execution context -> execute one line code at a time
// Each operation waits for the last one to complete before executing

// blocking Code -> Block the Flow of the Program -> read file sync 
// Non Blocking code  -> Don't block the execution -> read file Async


// use of this is based on the use cases
// high priority queue for the Promises 
// task queue for the call stack

// Web API  settimeOUT && fetch dom etc
// ************************* API Request and V8 engin **************************

//  Json formattern tool 
 
// before fetch the Xml method was used for API

//new XMLHttpsRequest()
// having states 1,2,3,4 
// 4 means done state  and the this.responceText is used to get the string return form the request
// it return an string  we have to parse it into the json object using json.parse()
// then we can use it as OBject to fetch values form it 

// core javasript is a arithemetic operation and the loops 

// node js is also an implementaion of the v8 engine
// the console.log()is also implemention of V8
// the writefile gives an functionality

// javascript is written in c++

// console.log()is an debug tool included by the v8 engine in the javascript


// ******************** Promise in javascript ***********************
// .then and .catch are the concept based on Promices
// THe promices Object represent the eventueal compleation (or failure) of an asynchronous operation and its resulting value
// "Promises in JavaScript are objects that represent the eventual success or failure of an asynchronous operation."

// let promise = new Promise((resolve, reject) => {
//   let success = true; // Simulating an operation that could succeed or fail
  
//   if (success) {
//     resolve("Operation was successful!");
//   } else {
//     reject("Operation failed!");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message); // "Operation was successful!"
//   })
//   .catch((error) => {
//     console.log(error); // "Operation failed!"
//   });

// A Promise is in one of these state 
// pending => initial state Neiteher fullfield or Rejected
// Fulfilled => meaning that the operation was succesfully Completed 
// Rejected => meaning that the operation failed 

// Q and bluebirds -> Es6 is provided the native support to the node.js
// creation and consumption
// const promiceone = new Promise(function(resolve,reject){
//   // Do an async task
//   // DB call, cryptography, network
//   setTimeout(() => {
//     console.log("async task is complete")
//     resolve()
//   }, 1000);

// })

// resolve -> then
// reject -> catch
// both take an callback function 
// promiceone.then(()=>{
//   console.log("promise Consumed")
// })

// new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     console.log("async task two")
//     resolve()
//   }, 1000);
// }).then(()=>{
//   console.log("Promise two consumed")
// })


// const promisethree =new Promise((resolve, reject)=>{
//   setTimeout(()=>{

//     resolve({username : "chai aur code", email : "chai@gmail.com"})

//   },1000)

// })

// promisethree.then((user)=>{
//   console.log(user)
// })

// const promiseFour = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     let error  = false
//     if (!error){
//       resolve({username : "vishal", Password : 123})
//     }else{
//       reject("the Promise is resolved")
//     }
    
//   }, 1000)
// })

// //Promise chaining


// promiseFour.then((user)=>{
//   console.log(user)
//   return user.username
// }).then((username)=>{
//   console.log(username)
// }).catch((message)=>{
//   console.log(message)
// }).finally(()=>{
//   console.log("The Promise is either resolved or rejected")
// })


// const promiseFive = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//         let error  = true
//         if (!error){
//           resolve({username : "javascript", Password : 123})
//         }else{
//           reject("Error : js went wrong")
//         }
        
//       }, 1000)

// });

// handling Promise by async await
// in this we gracefully  handle catch by using try and catch;


// async function consumeFive () {
//       try{
//         const result = await promiseFive
//         console.log(result)
//       }catch(error){
//         console.log(error)
//       }
  
// }

// consumeFive()


// fetch function return an Promice
// the Promice can be resolved or rejected
// the response need some time to parse into JSON object therefor we need to wait till the Parsing
// so we use await to parse responce to json


// async function getalluser() {

// try{
//   const response = await fetch('https://api.github.com/users/hiteshchaudhary')
//   // const obj1 =await  JSON.parse(response) not worling
//   const obj1 =  await response.json()
//   console.log(obj1)

// }catch(error){
//   console.log("E:", error)
// }
  
// }


// getalluser()

// ******************************** Fetch in javascript *************************

// why the fetch was executing first then the othr code calls?

// fetch API is introduced in node js in 2022

// Fetch is an global method which start fetching a resources from the network, returning a promise which is fullfilled once the response is available

// 404 is an response an not a when fetch

//  read the fetch MDN doc
// fetch use an priority queue therefore it is executed first

// **************************** Classes and object in javasript *************************
// javascript and classes
// does javascript relly have classese

// yes, javasript have classes but it was introduced in ES6 in 2015
// however javascript is an  prototype based langauge and classese are the systematic suger over prototype based inheritance mechanism

// it provide syntax like classes based langauge
// but under the hood the it is javascript-Prototypes

// programming paradigm -> way of writing code 

// OOP
// object -> collection of properties and method 
// toLowerCase

//  why we use -> due to mess up of the code 

// parts of OOP
//Object literal -> normal Object 


// -> constructur Function
// -> Prototype
// -> classes
// -> Instances(new, this)

// 4 pillers of OOP
// Abstraction   -> Hiding details 
// Encapsulation -> Wrap up 
// Inheritance -> inherit other features 
// Polymorphism -> one but more form

// const user  ={
//   //  this is an object literals
//   username:"vishal",
//   loginCount : 8,
//   signedIN : true,
//   // arrow function is not working here
//   getuserDetails : function (){
//     console.log(this)

//   }

// }

// console.log(user.username)
// user.getuserDetails()

// constructor fuction return an new literal copy 
// new is an constructor function 

function User(username, loginCount, isloggedin){
  this.username = username;
  this.loginCount  = loginCount;
  this.isloggedin = isloggedin;
  
  return this
}


// const userone =  new User("hitesh",5, true)
// const usertwo =  new User("Vishal",5, true)
// console.log(userone)
// console.log(usertwo)

// new keyword create an empty object 
// step 1 => create a empty object  ->instance
// step 2 => constructor fuction called due to this new keyword
// step 3 => function assign the values to object like variable and methods using this keyword
// step 4 => return the object

// console.log(userone.constructor)

// instance of  -> 
// The instanceof keyword in JavaScript is used to check whether an object is an instance of a specific constructor or class. It returns true if the object is an instance, and false otherwise.

// Check if userone is an instance of User
// console.log(userone instanceof User); // Output: true

// Check if userone is an instance of another type, like Array
// console.log(userone instanceof Array); // Output: false


// ******************** Magic of prototypes in Js *******************

// Prototype
// Arrow function don't have Access of this keyword due to prototype
// prototype provide 
// new this class inheritance and more

// array -> Prototype -array -> prototype -Object -> NULL

// string and function also have prototype then object
// function createUser(username, score){
//   this.username = username
//   this.score = score
// }

// createUser.prototype.increment = function(){
//   this.score++
// }
// createUser.prototype.printMe = function(){
//   console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()

// inheritance and prototype
// const Usere = {
//   name: "chai",
//   email: "chai@google.com"
// }

// const Teacher = {
//   makeVideo: true
// }

// const TeachingSupport = {
//   isAvailable: true
// }

// const TASupport = {
//   makeAssignment: 'JS assignment',
//   fullTime: true,
//   __proto__: TeachingSupport
// }

// Teacher.__proto__ = TASupport

// console.log(Teacher.isAvailable)
// teacher can access the properties of thee usere
// the properties can be inherited by the object using prototypes 


// modern syntax
// Object.setPrototypeOf(Teacher, TeachingSupport)
// properties of teachingSupport can be access by the teacher by using prototype

// console.log(Teacher.isAvailable)


// ** call and this in javasript ***

// call bind and apply and this keyword

// this tell us about current execution context

// call stack -> global execution context for evry function

// call is used to hold the reference of the function 
/*
function setusername(username){
  this.username = username
  console.log("called")

}


function CreateUser (username, email , password){

  // setusername(username) -> the funtion will be called but as soom as it compleate its execution context will be removed so it will not return anything 

  setusername.call(this,username) // this will hold the reference of the fuction 
  // this keyword bind the createuser context with the setusername
  // creater this is taken as reference and set bu the setusername fuc
  // we pass this because the execution contect of set fuv will be deleted so to set values we pass this which refres to createuser context
  this.email = email
  this.password = password

}

const valss = new CreateUser("Vishal", "ok@gmail.com", "244")
console.log(valss)

*/


// *** Classes costructure and static ***

// Es6

// class Users {
//   constructor(username , email, password){
//     this.email = email
//     this.password = password
//     this.username = username
//   }
//   encryptpassword(){
//         return `${this.password}abc`
//   }

//   Changeusername(){
//     return`${this.username.toUpperCase()}`
//   }

// }


// behind the scene

// function setUser (username , email , pass){
//   this.email = email
//   this.pass = pass
//   this.username = username
  
  
  
  
// }

// setUser.prototype.Changeusername= function(){
//   return`${this.username.toUpperCase()}`
// }


// const usera= new setUser("chai","chai@gamil.com", "5555ad5")

// console.log(usera.Changeusername())

// **** Inheritance in JS *******


// class USER {
//   constructor(username){
//     this.username = username

//   }
//   logMe(){
//     console.log(`Username is ${this.username}`)
//   }
// }

// class Teacher extends USER {
//   constructor(username , email){
//     super(username) // this is call and this behind the scene
//     this.email = email

//   }
//   addcourse(){
//     console.log(`A new course is added by ${this.username}`)
//   }
// }


// const chai = new Teacher ("chai","Chai@gmail.com")
// console.log(chai.addcourse())


// static props

// static keyword restict the use of the slected fuctin form own class and also derived class


// class USER {
//   constructor(username){
//     this.username = username
//   }

//   logME(){
//     console.log(`username : ${this.username}`)
//   }

//   static createID(){
//     return `123`

//   }
// }

// const usera = new USER("vd")
// console.log(usera.logME())

// *** Bind  in javasript ***

// bind keyword bind the javasript constructer this to anohter fuction 

// constructor -with properties and and on event an function is called 
// but this function don't have access of construcor element to give access we bind 
// constructor this with the fuction this. 
// we send constructor this to the fuctions 

// this.function_name.bind(this)

// ** Object in javascript **

// const descripter = Object.getOwnPropertyDescriptor(Math , "PI")

// descripter.value = 5

// // Math.pi = 5
// console.log(descripter.value)
// console.log(descripter);

// const chai = Object.create(null)
// console.log(chai)

// we can edit the properties of the Object
// using getOwnPropertyDescripter()
// using defineProperties()

const chai  = { 
  name : "vishal",

}

for(let [key , value] of Object.entries(chai)){
  if(typeof value != 'function'){
    console.log(`${key} : ${ value}`)
  }
}


// Object can be enumerable  or not can be decicded by the getownproperties()
// we can set and define the properties 

// ** getter setter and Stack overflow ** //

// getter help in getting the value
// setter help in setting up the values

// class USer  {
//   constructor(email , pass){
//     this.email = email
    // this.pass = pass 
    // now this is not setting the password the get or set has overriiden thid
    //the should be same for the get and set
//   }
//   get pass(){
//     return `cannot access this`
//   }
//   set pass(value){
//       this._pass = value
//   }
// }

// const histesh = new USer("h@gmail.com", "kajfkjfk")

// console.log(histesh.pass)

// this can be also done using the Object Define_Properties

// ** Lexical sciping and closure **//

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.



// lexical Scoping

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
    // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// closure
   // document.getElementById("orange").onclick = function(){
        //     document.body.style.backgroundColor = `orange`
        // }
        // document.getElementById("green").onclick = function(){
        //     document.body.style.backgroundColor = `green`
        // }

      //   function clickHandler(color){
      //     // document.body.style.backgroundColor = `${color}`

      //     return function(){
      //         document.body.style.backgroundColor = `${color}`
      //     }
      // }

      // document.getElementById('orange').onclick = clickHandler("orange")
      // document.getElementById('green').onclick = clickHandler("green")

// *** Arrays in javascript ***//
// beyond the basics


const myArray = []
%DebugPrint(myArray)

// continous, Holey 

// SMI (small interger) ->best type array
// Packed element 
// double (float, string , function)

const  arrTWO = [1,2,3,4,5,6,7]
// Packed smi element  takes only integer 
arrTWO.push(6.2)
//packed Doubled element

arrTWO.push('7')
//packed array

arrTWO[10] = 11
//holey elements

console.log(arrTWO)
console.log(arrTWO.length)
console.log(arrTWO[9])

//bounce check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,9)
//hasOwnProperty(Object.prototype,9)

// hole are very expensive in js

// SMI -> Double -> Packed ->
// H_SMI -> H_doubled -> H_packed

// once downgrade then then cann't be upgraded

//use the inbuilt methods for the array operation not ot use you own

// *** Javasript end with story ***//

// Now its time to handle the scenarios and Problem and Find solution on my own
//work on own skill Vishal 







