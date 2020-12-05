class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.pageHeader = pageHeader;
    this.gradeForm= gradeForm;
  }
  handleGetGradesError(error) {
    console.log(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total= 0;
    for (var i=0; i < grades.length; i++) {
      total += grades[i].grade
    }
    var avg = total / grades.length;
    this.pageHeader.updateAverage(avg);

  }

  getGrades() {
    var load = {
      method: 'GET',
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers: {
        "X-Access-Token" : "8xQfzCzF"
    }}
    $.ajax('https://sgt.lfzprototypes.com/api/grades', load)}

start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
handleCreateGradeSuccess(){
  this.getGrades();
}
handleCreateGradeError(error){
  console.log("error", error);
}


createGrade(name, course, grade) {
  var ajaxConfig = {
    method: "POST",
    success: this.handleCreateGradeSuccess,
    error: this.handleCreateGradeError,
    headers: {
      "X-Access-Token": "8xQfzCzF"
    },
    data: {
      name: name,
      course: course,
      grade: grade
    }
  }
  $.ajax('https://sgt.lfzprototypes.com/api/grades', ajaxConfig)
}
}
