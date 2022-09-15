const mongoQueries = require('./queries/mongodb.js');
const postgresQueries = require('./queries/postgresql.js');

const binExists = async (binId) => {
  return await postgresQueries.binExists(binId)
}

const createBin = async (req) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const binId = await postgresQueries.createBin(ip);
  await mongoQueries.createBin(binId);
  return binId;
}

const addRequest = async (binId, req) => {
  const added = await mongoQueries.addRequestToBin(binId, req);
  await postgresQueries.updateBin();
  return added;
}

const getRequests = async (binId) => {
  const requests = await mongoQueries.getRequestsByBinId(binId);
  return requests;
}

const deleteBin = async (binId) => {
  await postgresQueries.deleteBin(binId);
  return await mongoQueries.deleteBin(binId);
}

const deleteBinsOlderThan = async (daysOld) => {
  const binsToDelete = await postgresQueries.getBinsOlderThan(daysOld);
  binsToDelete.forEach(async binId => {
    if (!binExists(binId)) return;
    await postgresQueries.deleteBin(binId);
    await mongoQueries.deleteBin(binId);
  });
}

const dataMethods = {
  binExists,
  createBin,
  addRequest,
  getRequests,
  deleteBin,
  deleteBinsOlderThan,

}

module.exports = dataMethods;
