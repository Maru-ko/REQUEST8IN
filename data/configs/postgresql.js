require('dotenv').config();

const { Pool } = require('pg');

const PGPool = new Pool();

module.exports = PGPool;