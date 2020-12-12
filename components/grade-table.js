class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = ''
    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.append(row)
    }
var p = document.querySelector('p');
if(grades.length) {
  console.log(p)
  p.className = "d-none";
} else {
  console.log(p)
  p.className= '';
}
  }

onDeleteClick(deleteGrade) {
  this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tr = document.createElement("tr")
    var tdName = document.createElement("td")
    var tdCourse = document.createElement("td")
    var tdGrade = document.createElement("td")
    var tdButton = document.createElement("td")
    var button = document.createElement("button")

    tdName.textContent = data.name;
    tdCourse.textContent = data.course;
    tdGrade.textContent = data.grade;
    button.className = "btn btn-danger";
    button.textContent = "DELETE";
    button.addEventListener("click", function () {
      deleteGrade(data.id)
    });
    tdButton.append(button);
    tr.append(tdName, tdCourse, tdGrade, tdButton);
    return tr
  }
}
