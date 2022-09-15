require('dotenv').config();
const PGPool = require('../configs/postgresql.js');

const createBin = async (ip) => {
  const result = await PGPool.query('INSERT INTO bins (ip) VALUES($1) RETURNING path', [ip]);
  const path = result.rows[0].path;
  return path;
}

const deleteBin = async (binId) => {
  const result = await PGPool.query('DELETE FROM bins WHERE path = $1 RETURNING true', [binId]);
  const deleted = result.rowCount == 1;
  return deleted;
}

const getBinsOlderThan = async (daysOld) => {
  const bins = await PGPool.query(`SELECT path FROM bins WHERE last_request_date < CURRENT_DATE - ${daysOld}`);
  const binIds = bins.rows.map(row => row.path);
  return binIds;
}

const updateBin = async (binId) => {
  const result  = await PGPool.query('UPDATE bins SET last_request_date = CURRENT_DATE WHERE path = $1 RETURNING true', [binId]);
  const updated = result.rowCount == 1;
  return updated;
} 

const binExists = async (binId) => {
  const result = await PGPool.query('SELECT 1 FROM bins WHERE path = $1', [binId]);
  const exists = result.rowCount == 1
  return exists;
}

const postgresQueries = {
  createBin,
  deleteBin,
  updateBin,
  getBinsOlderThan,
  binExists,
}

module.exports = postgresQueries;
