const getStudentData = () => {
  console.log("all student data");
};
const getEmployeeDyta = () => {
  console.log("all employee data");
};

const getData = (param, cb) => {
  cb();
};

var parmData = "student";

if (parmData == "student") {
  getData("student", getStudentData);
} else {
  getData("employee", getEmployeeDyta);
}
