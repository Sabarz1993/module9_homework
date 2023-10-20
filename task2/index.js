// Задание 2. 
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
const jsonListString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic",
   "id": 1
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot",
   "id": 2 
  }
 ]
}
`; 

const data = JSON.parse(jsonListString);
const list = data.list;


const user1 = list.find(item => item.id == "1");
const user2 = list.find(item => item.id == "2");

const obj1 = {name: user1.name,age:user1.age,prof:user1.prof};
const obj2 = {name: user2.name,age:user2.age,prof:user2.prof};

const listJs = [{obj1},{obj2}];
  

console.log(listJs)