require('dotenv').config();
const BinModel = require('../configs/mongodb.js');
const { parseRequest } = require('../../utils/request.js');

const createBin = async (binId) => {
  const bin = new BinModel({ binId: binId, requests: [] });
  const result = await bin.save();
  return result; // returns true if the creation occurred
}

const deleteBin = async (binId) => {
  const result = await BinModel.remove({ binId: binId });
  return result.nRemoved >= 1; // returns true if a corresponding bin was removed
}

const addRequestToBin = async (binId, request) => {
  request = parseRequest(request);

  const result = await BinModel.updateOne({ binId: binId }, {
                         $push: { 
                           requests: {
                             $each: [request],
                             $slice: process.env.MAX_REQUESTS_PER_BIN
                           } 
                         }
                       });

  return result.acknowledged; // returns true if the change occurred
}

const getRequestsByBinId = async (binId) => {
  const bins = await BinModel.find({ binId: binId });
  const bin = bins[0];
  const requests = bin.requests
  return requests;
}

const mongoQueries = {
  createBin,
  deleteBin,
  addRequestToBin,
  getRequestsByBinId,

}

module.exports = mongoQueries;