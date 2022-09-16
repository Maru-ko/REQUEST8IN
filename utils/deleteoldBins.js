require('dotenv').config();
const setEnvironmentVariables = () => {
  process.env.MONGODB_DB_NAME="request8in"
  process.env.MONGODB_USER='request8in'
  process.env.MONGODB_PASSWORD='secret'
  process.env.MONGODB_PORT=27017

  process.env.PGUSER='request8in'
  process.env.PGHOST='localhost'
  process.env.PGPASSWORD='secret'
  process.env.PGDATABASE='request8in'
  process.env.PGPORT=5433
  process.env.BINS_DELETE_DAY=1
}
setEnvironmentVariables();
const dataQueries = require('../data/Data');

const deleteBin = async () => {
  const days = process.env.BINS_DELETE_DAY;
  const deleted = await dataQueries.deleteBinsOlderThan(days)
  dataQueries.deleteBin('52b516cd-af2e-4d3b-be2d-fc0607a60a86');

  console.log('deleted');
}

//const cronSimulation = async() => {
//  const milliSecondsInDay = 1000*60*60*24;
//  setInterval(deleteBin, milliSecondsInDay);
//}


deleteBin();
