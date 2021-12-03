const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'postgr35',
    host: 'localhost',
    port: 5432,
    database: 'readlist'
});

module.exports = pool;