// 1-masala


// let newValue:string | null = prompt("Qiymat kiriting")

// function addValue(value:string | null):string[]{
//     const arr:string[] = []
//     if(value){
//         arr.push(value)
//     }
//     return arr
// }

// const res:string[] = addValue(newValue)
// console.log(res);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2-masala

// let numberList:number[] = [1,3,5,7,9]


// function findMax(arr:number[]) : number{
//     return Math.max(...arr)
// }

// let res:number = findMax(numberList)
// console.log(res);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3-masala

// let list:string[] = ['salom','yaxshi','qonday']
// let value: string | null = prompt("Qiymat kiriting") 

// function findHave(arr:string[],val:string | null):boolean{
//     let newValue:boolean = false
//     if(val){
//         arr.forEach((item : string) => {
//             if(item = val){
//                 newValue = true
//             }
//             else{
//                 newValue = false
//             }
//         })
//     }
//     return newValue
// }

// let res:boolean = findHave(list,value)
// console.log(res);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4-masala

// let numberList : number[] = [1,3,5,4,7,10,2]

// function findEven(arr:number[]):number[]{
//     let newArr:number[] = []
//     arr.forEach((item : number) => {
//         if(item % 2 == 0){
//             newArr.push(item)
//         }
//         else{
//             newArr
//         }
//     })
//     return newArr
// }

// let res:number[] = findEven(numberList)
// console.log(res);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5-masala

// let numberList = [2,4,5,3,2]

// function findTotal(arr:number[]):number{
//     let total:number = 0
//     arr.forEach((item:number) => {
//         total = total + item
//     })
//     return total
// }

// let res = findTotal(numberList)
// console.log(res);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6-masala

// type UsersType = {
//     id:number
//     name:string
//     email:string
//     adress:string
//     password:string | number
// }

// type ResultType = {
//     name:string
//     email:string
// }

// let userList: Array<UsersType> = [
//     {
//         id:1,
//         name:'Abdugani',
//         adress:'Toshkent',
//         email:"gani@gmail.com",
//         password:'gani123'
//     }
// ]

// function fn(arr:Array<UsersType>):ResultType {
//     const data = arr.map((item:UsersType) => ({name:item.name,email:item.email}))
//     return data[0]
// }
// const res:ResultType = fn(userList)
// console.log(res);




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7-masala

// type UsersType = {
//     id: number
//     name: string
//     email: string
//     adress: string
//     password: string | number
// }


// let array:Array<UsersType> = [
//     {
//         id:1,
//         name:"Diyorbek",
//         adress:'Sergeli',
//         email:'diyoraue@gmail.com',
//         password:'diyor111'
//     },
//     {
//         id:2,
//         name:"Nurkat",
//         adress:'Maksim Gorkiy',
//         email:'nurkat@gmail.com',
//         password:'narxoz'
//     },
//     {
//         id:3,
//         name:"Pokiza",
//         adress:'Sergeli',
//         email:'pokiza@gmail.com',
//         password:'pokiza111'
//     },
//     {
//         id:4,
//         name:"Asad",
//         adress:'Yangiyol',
//         email:'asadbori@gmail.com',
//         password:'asad222'
//     },
//     {
//         id:5,
//         name:"Fazliddin",
//         adress:'Uchtepa',
//         email:'fazliddin@gmail.com',
//         password:'fazliddin123'
//     }
// ]

// let value:number = Number(prompt('Qiymat kiriting')) 

// function findAdress(arr:Array<UsersType>,val:number):string | undefined{
//     const user:UsersType | undefined = arr.find((item:UsersType) => item.id === val )
//     return user ? user.adress : undefined
// }

// const res : string | undefined = findAdress(array,value)
// console.log(res);


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 8-masala 


// type UsersType = {
//     id: number
//     name: string
//     email: string
//     adress: string
//     password: string | number
// }

// let array:Array<UsersType> = [
//     {
//         id:1,
//         name:"Diyorbek",
//         adress:'Sergeli',
//         email:'diyoraue@gmail.com',
//         password:'diyor111'
//     },
//     {
//         id:2,
//         name:"Nurkat",
//         adress:'Maksim Gorkiy',
//         email:'nurkat@gmail.com',
//         password:'narxoz'
//     },
//     {
//         id:3,
//         name:"Pokiza",
//         adress:'Sergeli',
//         email:'pokiza@gmail.com',
//         password:'pokiza111'
//     },
//     {
//         id:4,
//         name:"Asad",
//         adress:'Yangiyol',
//         email:'asadbori@gmail.com',
//         password:'asad222'
//     },
//     {
//         id:5,
//         name:"Fazliddin",
//         adress:'Uchtepa',
//         email:'fazliddin@gmail.com',
//         password:'fazliddin123'
//     }
// ]

// function getByName(arr:Array<UsersType>):string[]{
//     const newArr = arr.map((item:UsersType) => item.name)
//     return newArr
// }

// const res:string[] = getByName(array)
// console.log(res);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 9-masala


// let arr1:number[] = [1,4,7,9,4,2] 
// let arr2:number[] = [6,8,7,3,10,5] 

// function findMax(arr:number[],array:number[]):string[]{
//     const max1:string = String(Math.max(...arr))
//     const max2:string = String(Math.max(...array))
//     const data:string[] = [max1,max2]
//     return data
// }

// const res:string[] = findMax(arr1,arr2)
// console.log(res);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10-masala

// const array:number[] = [-1,3,5,-6,-8,10,22,23,-31]

// function findEvenAndOdd(arr:number[]):void{
//     const evenArr:number[] = array.filter((item:number) => item % 2 == 0)
//     const oddArr:number[] = array.filter((item:number) => item % 2 != 0)
//     console.log(evenArr,oddArr);
// }

// findEvenAndOdd(array)




// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







// 2-rasm

// 1-masala


// function findReverse(numb:number):number{
//     if(numb > 99 && numb < 1000){
//         return Number(numb.toString().split('').reverse().join(''))
//     }
//     else{
//         return numb
//     }
// }

// const res:number = findReverse(455)
// console.log(res);


//----------------------------------------------------------------------------------------------------------------------------------------------


// 2-masala


// function findFactorial(numb:number):number{
//     let a = 1
//     for(let i = 2; i <= numb;i++){
//         a = a*i
//     }
//     return a
// }

//  const res:number = findFactorial(5)
//  console.log(res);
 

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 3-masala

// let obj1:{name:string,age:number} = {
//     name:'Nodir',
//     age:25
// }
// let obj2:{name:string,age:number} = {
//     name:'Ibrohim',
//     age:21
// }

// function findAge(object1:{name:string,age:number},object2:{name:string,age:number}):string{
//     let max:boolean = false
//     if(object1.age > object2.age){
//         max = true
//     }
//     else{[
//         max = false
//     ]}
//     return max ? object1.name : object2.name
// }

// const res:string = findAge(obj1,obj2)
// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 4-masala

// function findNumbers(value:number):void{
//     if(value > 0){
//         findNumbers(value - 1)
//     }
//     console.log(value);
// }
// findNumbers(120)


//------------------------------------------------------------------------------------------------------------------------------------------------------


// 5-masala


// let user:{name:string} = { name: "Shaxzod" };
// let age:{age:number} = { age: 25 };
// let userJob:{job:string} = { job: "Developer" };

// function getObject(obj1:{name:string},obj2:{age:number},obj3:{job:string}):{name:string,age:number,job:string}{
//     return Object.assign({},obj1,obj2,obj3)
// }

// const res:{name:string,age:number,job:string} = getObject(user,age,userJob)
// console.log(res)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// 6-masala

// let salaries:{aXodim:number,bXodim:number,cXodim:number} = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
// }

// function addValue(obj:{aXodim:number,bXodim:number,cXodim:number}) : number{
//     return Object.values(obj).reduce((item,numb) => item + numb)
// }

// const res:number = addValue(salaries)
// console.log(res);

// --------------------------------------------------------------------------------------------------------------------------------------------

// 7-masala


// let numberList:number[] = [1,3,5,7,9]


// function findMax(arr:number[]) : number{
//     return Math.max(...arr)
// }

// let res:number = findMax(numberList)
// console.log(res);


// -------------------------------------------------------------------------------------------------------------------------------------------------------

// 8-masala

// let arr:any = [2, 4, 6, 7, true, false, null, undefined];

// function findStatus(array:any):any{
//     return array.reduce((item:any,value:any) => {
//         if (value === undefined) value = 0;
//         if (typeof value === 'number') {
//             return item + value;
//         }
//         return item;
//     }, 0);
// }

// console.log(findStatus(arr));