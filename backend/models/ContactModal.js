import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Sequelize } from 'sequelize';
import doenv from 'dotenv';

doenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql', // Change this to 'mysql' instead of 'mysql2'
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  logging: false,
}); // Assuming you have a Sequelize instance

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleDateString(),
  },
  time: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'contacts', // Set the table name explicitly
});

// Synchronize the model with the database (create the table)
Contact.sync({ force: true, logging: false })
  .then(() => {
    console.log('Contact Table created');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });

export default Contact;
