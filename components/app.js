class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.pageHeader = pageHeader;
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
      url: 'https://sgt.lfzprototypes.com/api/grades',
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers: {
        "X-Access-Token" : "8xQfzCzF"
    }}
$.ajax(load)
  }
  start(){
    this.getGrades();
  }
}
