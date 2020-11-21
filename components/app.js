class App {
  handleGetGradesError(error) {
    console.log(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updatesGrades(grades);
  }
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess(this)
    this.gradeTable = this.gradeTable
  }
  getGrades() {
    var ajax = {
      method: "GET",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers: {
        "X-Access-Token": ""
      },
    }
  }
  $.ajax("https://sgt.lfzprototypes.com/api/grades", ajax)
  start() {
    this.getGrades()
  }
}
