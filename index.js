                                        //EXCERCISE 1
let user = {};
Object.defineProperty(user, 'name', {writable: false,});            //method 1
Object.defineProperty(user, 'age', {writable: false,});
Object.defineProperty(user, 'id', {
    writable: false,
    configurable: false,
});

// // Object.defineProperties(user, {             //method 2
// //     'name': {
// //         writable: false,
// //     }, 
// //     'age': {
// //         writable: false,
// //     }, 
// //     'id': {
// //         writable: false,
// //         configurable: false,
// //     }}); 

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user, 'age'));
console.log(Object.getOwnPropertyDescriptor(user, 'id'));


                                        //EXCERCISE 2
// let dataBase = {
//     dbName: 'user',
//     dbType: 'MySQL',
// };
// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// };
// Object.freeze(dataBase);
// Object.seal(configurateDB);
// dataBase.dbNum = 45;                // for test
// dataBase.dbName = 'asdasd';
// console.log(dataBase.dbNum, dataBase.dbName);
// configurateDB.num = 45;
// configurateDB.user = 'not admin';
// console.log(configurateDB.num, configurateDB.user);


                                        //EXCERCISE 3
// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000,
// };
// Object.defineProperty(salaries, 'sum', {
//     get(){
//         let sum = 0;
//         for (salary in this){
//             sum += this[salary];
//         }
//         console.log(sum);
//     },
//     enumerable: false
// });

// Object.defineProperty(salaries, 'addSalaries', {
//     set(value){
//         for (let key in salaries){
//             for (let i = 0; i < value.length; i++){
//                 let userProp = value[i].split(': ');
//                 if (i !== (value.length-1)){
//                     if (key == userProp[0]){
//                         salaries[key] = userProp[1]
//                     }else{
//                         continue
//                     }
//                 }else{
//                     this[userProp[0]] = userProp[1]
//                 }
//             }
//         }
//     }
// });

// salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
// console.log(salaries);


                                        //EXCERCISE 3
// let user = {
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
// };

// Object.defineProperty(user, 'userInfo', {
//     get(){
//         let info = [];
//         let infoStr = '';
//         for (key in user){
//             infoStr = key + ': ' + user[key];
//             info.push(infoStr);
//         }
//         console.log(info.join(', '));
//     }
// })

// user.userInfo;
// user.login = 'MK_18';
// user.userInfo;