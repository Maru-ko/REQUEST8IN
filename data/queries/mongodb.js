const BinModel = require('..configs/mongodb.js');

const createBin = async (binId) => {
  const result = await BinModel.insert({ id: binId, requests: [] });
  return result.nInserted == 1; // returns true if the creation occurred
}

const deleteBin = async (binId) => {
  const result = await BinModel.remove({ id: binId });
  return result.nRemoved >= 1; // returns true if a corresponding bin was removed
}

const addRequestToBin = async (binId, request) => {
  const result = await BinModel.updateOne({ id: binId }, {
                         $push: { 
                           requests: {
                             $each: [request],
                             $slice: process.env.MAX_REQUESTS_PER_BIN
                           } 
                         }
                       });

  return result.acknowledged // returns true if the change occurred
}

const getRequestsByBinId = async (binId) => {
  const requests = await BinModel.find({ id: binId });
  console.log(requests);
  return requests;
}

const mongoQueries = {
  createBin,
  deleteBin,
  addRequestToBin,
  getRequestsByBinId,

}

module.exports = mongoQueries;