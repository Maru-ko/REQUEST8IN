const util = require('util');

module.exports.parseRequest = (req) => {
  const raw = JSON.stringify(util.inspect(req));
  const method = req.method;
  const protocol = req.protocol;
  const headers = req.headers;
  let body = req.body;

  if (body.constructor.name == 'Buffer') {
    body = body.toString();
  } else {
    body = JSON.stringify(body);
  }

  if (body === '{}') {
    body = undefined;
  }

  const queryParams = req.query;
  const requestor_ip = req.headers['x-forwarded-for'] || req.ip;
  const time_received = new Date();

  const request = {
    raw,
    method,
    protocol,
    headers,
    body,
    queryParams,
    requestor_ip,
    time_received,
  }

  return request;
}
