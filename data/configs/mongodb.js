require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@localhost:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB_NAME}`)
        .then(() => console.log('Connected to MongoDB'));

const BinSchema = new Schema({
  binId: String,
  requests: [{
    method: String,
    raw: String,
    protocol: String,
    headers: Schema.Types.Mixed,
    body: String,
    queryParams: Schema.Types.Mixed,
    requestor_ip: String,
    time_received: String
  }]
});

const BinModel = mongoose.model('bin', BinSchema);

module.exports = BinModel;