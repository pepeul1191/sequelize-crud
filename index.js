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
    new_student = await models.Student.create({
      name: name,
      code: code,
    });  
  }catch(error){
    console.log(error);
  }
  console.log(JSON.stringify(new_student));
}

async function editar(id, name, code){
  var student;
  try{
    student = await models.Student.update({
      name: name,
      code: code,
    }, {
      where: {
        id: id  
      }
    });
  }catch(error){
    console.log(error);
  }
  console.log(JSON.stringify(student));
}

async function eliminar(id){
  var student;
  try{
    student = await models.Student.destroy({
      where: {
        id: id  
      }
    });  
  }catch(error){
    console.log(error);
  }
  console.log(JSON.stringify(student));
}

async function transaccion(){
  var data = [
    {
      name: 'Javier',
      code: '123123',
    },
    {
      name: 'Mariano',
      code: '982312',
    },
    {
      name: 'Leonel',
      code: '809384',
    },
    {
      name: 'Carlos',
      code: null,
    },
  ];
  var tx;
  var ids = [];
  try {
    tx = await models.db.transaction();
    for(var i = 0; i < data.length; i++){
      var new_student = await models.Student.create({
        name: data[i].name,
        code: data[i].code,
      },{
        transaction: tx
      });
      console.log(JSON.stringify(new_student));
      ids.push(new_student.id);
    } 
    await tx.commit();
  } catch (err) {
    console.log(err);
    await tx.rollback();
  }
  console.log(ids);
}

// listar();
// crear('Carlos', 'l21j312');
// editar(4, 'Carlitos', '12345');
// eliminar(4);
transaccion();