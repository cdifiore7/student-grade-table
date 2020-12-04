/* eslint-disable no-undef */
var table = document.getElementsByTagName('table');
var gradeTable = new GradeTable(table)
var header = document.querySelector('header');
var pageHead = new PageHeader(header)
var grade = new App(gradeTable, pageHead)

grade.start()
