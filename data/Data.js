const mongoQueries = require('./queries/mongodb.js');
const postgresQueries = require('./queries/postgresql.js');

// binExists(binId)
const binExists = async (binId) => {
  return await postgresQueries.binExists(binId)
}

// createBin() => returns binId (UUID)
const createBin = async (req) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const binId = await postgresQueries.createBin(ip);
  await mongoQueries.createBin(binId);
  return binId;
}

const addRequest = async (binId, req) => {
  const added = await mongoQueries.addRequestToBin(binId, req);
  return added;
}

const getRequests = async (binId) => {
  const requests = await mongoQueries.getRequestsByBinId(binId);
  return requests;
}

const deleteBin = async (binId) => {
  return await mongoQueries.deleteBin(binId);
}

const methods = {
  binExists,
  createBin,
  addRequest,
  getRequests,
  deleteBin,

}

module.exports = methods;
