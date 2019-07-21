const models = require('./configs/models');

async function listar(){
  var students = await models.Student.findAll({});
  students.forEach(function(student) {
    console.log(JSON.stringify(student));
  });
  console.log(JSON.stringify(students));
  return '';
}

listar();

