class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = ""
    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement("tr")
      var tdname = document.createElement("td")
      var tdcourse = document.createElement("td")
      var tdgrade = document.createElement("td")

      tdname.textContent = grades[i].name;
      tdcourse.textContent = grades[i].course;
      tdgrade.textContent = grades[i].grade;
      tr.append(tdname, tdcourse, tdgrade);
      tbody.append(tr)
    }
  }
}
