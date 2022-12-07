const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: true,
    freezeTableName: true, //To avoid plurals while creating table name
  },
  operatorsAliases: 0,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.adminLogin = require("./login.model.js")(sequelize, Sequelize);
db.logoutModel = require("./logout.model.js")(sequelize, Sequelize);
db.doctorModel = require("./doctor.model.js")(sequelize, Sequelize);
db.patientModel = require("./patient.model.js")(sequelize, Sequelize);
db.labModel = require("./lab.model.js")(sequelize, Sequelize);
db.hospitalModel = require("./hospital.model.js")(sequelize, Sequelize);
db.medicalReportModel = require("./medical_report.model.js")(sequelize, Sequelize);
db.diseaseModel = require("./disease.model.js")(sequelize, Sequelize);



module.exports = db;
