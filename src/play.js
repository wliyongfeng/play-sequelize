require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
