// Inputs
let StudentName = document.querySelector('#Student-name')
let StudentSurname = document.querySelector('#Student-surname')


//Кнопки

let addStudentButton = document.querySelector('.add-student')

// Таблица
let StudentsListElement = document.querySelector('.students-list')

let StudentsArray = []

addStudentButton.addEventListener('click', function(event){
   let StudentNameValue = StudentName.value
   let StudentSurnameValue = StudentSurname.value

   let StudentString = `${StudentNameValue} ${StudentSurnameValue}`

   StudentsArray.push(StudentString)

   let innerHTMLWithStudents = ''

   StudentsArray.forEach((item, index) => {
     innerHTMLWithStudents += `<div>${index+1} ${item}</div>`
   });
   StudentsListElement.innerHTML = innerHTMLWithStudents
  
})