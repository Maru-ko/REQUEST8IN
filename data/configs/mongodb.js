const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}127.0.0.1/${process.env.MONGODB_DB_NAME}`);

const BinSchema = new Schema({
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