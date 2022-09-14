module.exports.parseRequest = (req) => {
  const reqBody = {};
  reqBody.headers = {};
  Object.keys(req.headers).forEach(header => reqBody.headers[header] = req.headers[header]);
  //reqBody.rawBody = req;
  console.log(req);
  reqBody['param-query'] = req.query;
  reqBody.body = req.body;
  reqBody.ip = req.headers['x-forwarded-for'];
  Object.keys(req).forEach(key => console.log(key));
  Object.keys(req.client).forEach(key => console.log(key));
  Object.keys(req.socket).forEach(key => console.log(key));
}
