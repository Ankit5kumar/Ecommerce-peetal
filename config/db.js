const mongoose = require('mongoose');
require('dotenv').config();
const db = async () => {                
  try {
    const conn = await mongoose.connect(process.env.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}   
module.exports = db;    