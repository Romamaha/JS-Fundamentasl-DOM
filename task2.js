// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js


function applyStyles() {
    const styledElement = document.getElementById("title")
    const firstPar = document.getElementById("myDiv").children[0]
    const secondPar = document.getElementById("myDiv").children[1]
    const thirdPar = document.getElementById("myDiv").children[2]
    const fourthPar = document.getElementById("myDiv").children[3]
    const myList = document.getElementById("myList")
    const span = document.querySelector('.style_elements span')

    styledElement.style.fontSize = "24px";
    styledElement.style.backgroundColor = "lightgreen";

    firstPar.style.fontWeight = "700";
    secondPar.style.color = "red";
    thirdPar.style.textDecoration = "underline";
    fourthPar.style.fontStyle = "italic";

    myList.style.listStyle = "none";
    myList.style.display = "flex";

    span.style.display = "none";


 }

 module.exports = applyStyles;
