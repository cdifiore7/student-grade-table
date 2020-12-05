class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var formdata = new FormData(event.target);
    var studentname = formdata.get('name');
    var studentcourse = formdata.get('course');
    var studentgrade = formdata.get('grade');
    this.createGrade(studentname, studentcourse, studentgrade);
    event.target.reset();
  }
}
