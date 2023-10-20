// Задание 1.Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
 XML:

<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>

const parser = new DOMParser;

const XmlList = `
<list>
  <student1>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student1>
  <student2>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student2>
</list>
`;

const XmlDOM = parser.parseFromString(XmlList, "text/xml");

const listNode = XmlDOM.querySelector("list");
// ищем теперь первого студента
// добавил в исходный файл - обозначение для 1 и 2 студента "<student1>" и "<student2>"
const studentNode1 = listNode.querySelector("student1");
const nameNode1 = studentNode1.querySelector("name");
const firstNameNode1 = nameNode1.querySelector("first");
const SecondNameNode1 = nameNode1.querySelector("second");
const languageAtrr1 = nameNode1.getAttribute('lang');
const ageNode1 = studentNode1.querySelector("age");
const professionNode1 = studentNode1.querySelector("prof");

const studentNode2 = listNode.querySelector("student2");
const nameNode2 = studentNode2.querySelector("name");
const firstNameNode2 = nameNode2.querySelector("first");
const SecondNameNode2 = nameNode2.querySelector("second");
const languageAtrr2 = nameNode2.getAttribute('lang');
const ageNode2 = studentNode2.querySelector("age");
const professionNode2 = studentNode2.querySelector("prof");

const result = {
  list:[{
       name: `${firstNameNode1.textContent} ${SecondNameNode1.textContent}`,
       age: Number(ageNode1.textContent),
       prof: professionNode1.textContent,
       lang: languageAtrr1
  }
  ,
  {
       name: `${firstNameNode2.textContent} ${SecondNameNode2.textContent}`,
       age: Number(ageNode2.textContent),
       prof: professionNode2.textContent,
       lang: languageAtrr2
  }]
};
console.log(result);