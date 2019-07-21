const Sequelize = require('sequelize');
var database = require('.database');

var db = database.db;

const Student = db.define('students', {
	id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true ,
  },
	name: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
  code: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
});

exports.Student = Student;
exports.db = db;