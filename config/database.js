const { Pool } = require("pg");
require("dotenv").config();

//prod

const pool = new Pool({
  user: "dhqlvguotilqqb",
  host: "ec2-54-195-195-81.eu-west-1.compute.amazonaws.com",
  database: "dfpnvcat0mt6ld",
  password: "3684599ab1a9f76d39a09a1d1cc5421ca07dc9e927eecdf5d4393d0768acfb92",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// const pool = new Pool({
//   user: process.env.user,
//   host: process.env.host,
//   database: process.env.database,
//   password: process.env.password,
//   port: 5432,
// });

module.exports = pool;
