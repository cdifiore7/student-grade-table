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
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess =  this.handleDeleteGradeSuccess.bind(this);
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
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }


handleCreateGradeSuccess(){
  this.getGrades();
}
handleCreateGradeError(error){
  console.error(error);
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


deleteGrade(id){
  var deleteconfig = {
    type: "DELETE",
    success: this.handleDeleteGradeSuccess,
    error: this.handleDeleteGradeError,
    headers: {
      "X-Access-Token": "8xQfzCzF"
    },

  };
  $.ajax("https://sgt.lfzprototypes.com/api/grades/" + id, deleteconfig)
}
handleDeleteGradeError(error){
  console.error(error);
}
handleDeleteGradeSuccess(){
  this.getGrades();
}
}
