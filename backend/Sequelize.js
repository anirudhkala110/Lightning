import { Sequelize } from 'sequelize';
import doenv from 'dotenv';

doenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql', // Change this to 'mysql' instead of 'mysql2'
  host: process.env.HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
  logging: false,
});

export default sequelize;
