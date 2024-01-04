// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 


const name = document.querySelector("[name='fio']").value;
const phoneNumber = document.querySelector("[name='phone']").value;
const dataOfBirth = document.querySelector("[name='birthday']").value;
const emailAddress = document.querySelector("[name='email']").value;



module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
