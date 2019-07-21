const models = require('./configs/models');

async function listar(){
  var students = await models.Student.findAll({});
  /*
  students.forEach(function(student) {
    console.log(JSON.stringify(student));
  });
  */
  console.log(JSON.stringify(students));
}

async function crear(name, code){
  var new_student;
  try{
    new_student= await models.Student.create({
      name: name,
      code: code,
    });  
  }catch(error){
    console.log(error);
  }
  console.log(JSON.stringify(new_student));
}

listar();
// crear('Carlos', 'l21j312');
