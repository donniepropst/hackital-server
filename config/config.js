module.exports = {
    database: 'hackital',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,

    development: {
    host: process.env.DATABASE_URL,
    dialect: 'mysql'
  }
};
