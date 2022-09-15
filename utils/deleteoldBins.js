const dataQueries = require('../data/Data');
require('dotenv').config();

const deleteBin = async () => {
  const days = process.env.BINS_DELETE_DAY;
  const deleted = await dataQueries.deleteBinsOlderThan(days)
  console.log(deleted);
}

const cronSimulation = async() => {
  const milliSecondsInDay = 1000*60*60*24;
  setInterval(deleteBin, milliSecondsInDay);
}

cronSimulation();