/* eslint-disable no-undef */
var table = document.getElementsByTagName('table');
var gradeTable = new GradeTable(table);
var header = document.querySelector('header');
var pageHead = new PageHeader(header);
var formElement= document.querySelector('form')
var gradeForm = new GradeForm(formElement);
var grade = new App(gradeTable, pageHead, gradeForm);

grade.start()
