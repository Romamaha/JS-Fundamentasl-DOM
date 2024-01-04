// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку, в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінн secondEl
// четвертний елемент - змінна fourthEl
//третій елемент - змінна thirdEl
// для перевірки завдання запустити команду npx jest task1.test.js

const list = document.getElementById("list")

firstEl = list.firstElementChild.textContent;
lastEl = list.lastElementChild.textContent;
secondtEl = list.children[1].textContent;
fourthEl = list.children[3].textContent;
thirdtEl = list.children[2].textContent;

 module.exports = {
   firstEl,
   lastEl,
   secondtEl,
   fourthEl,
   thirdtEl,
 };
