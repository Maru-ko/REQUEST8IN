require('dotenv').config();
const PGPool = require('../configs/postgresql.js');

const createBin = async (ip) => {
  const result = await PGPool.query('INSERT INTO bins (ip) VALUES($1) RETURNING path', [ip]);
  const path = result.rows[0].path;
  return path;
}

const deleteBin = async (binId) => {

  // return true if bin is deleted
}

const getBinIdsByDate = async (date) => {

  // return array of bin Ids for bins that were created on a particular date
}

const updateBin = async (binId) => {
  const result  = await PGPool.query("UPDATE bins SET last_request_date = '2022-09-15' WHERE path = $1 RETURNING true", [binId]);
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
  getBinIdsByDate,
  binExists,
}

module.exports = postgresQueries;
