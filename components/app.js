/* eslint-disable no-undef */
class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error) {
    console.log(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
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
