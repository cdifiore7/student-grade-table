var table = document.querySelector('table');
var gradeTable = new GradeTable(table);
var header = document.querySelector('header');
var pageHead = new PageHeader(header);
var formElement= document.querySelector('form');
var gradeForm = new GradeForm(formElement);
var app = new App(gradeTable, pageHead, gradeForm);

app.start();
