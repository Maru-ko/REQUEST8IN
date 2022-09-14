const postgresQueries = require('./queries/postgresql.js');
// const mongoQueries = require('./queries/mongodb.js');

const pgTest = async () => {
  let path = await postgresQueries.createBin('123.456');
  console.log(path);
}

const pgTest2 = async () => {
  let result = await postgresQueries.binExists('1aec501f-b52a-473c-adb6-df57a150946a');
  console.log(result);
}

const pgTest3 = async () => {
  let result = await postgresQueries.updateBin('1aec501f-b52a-473c-adb6-df57a150946a');
  console.log(result);
}
const runTests = async () => {
  pgTest3();
}

runTests();

// const test = async () => {
//   let result = await mongoQueries.createBin('123456789');
//   console.log(result);
// }

// const test2 = async () => {
//   let request = {
//     // raw: "WAFFLE",
//     method: 'GET',
//     protocol: 'http',
//     headers: {
//       host: 'localhost:3003',
//       connection: 'keep-alive',
//       'cache-control': 'max-age=0',
//       'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-platform': '"macOS"',
//       'upgrade-insecure-requests': '1',
//       'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
//       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//       'sec-fetch-site': 'none',
//       'sec-fetch-mode': 'navigate',
//       'sec-fetch-user': '?1',
//       'sec-fetch-dest': 'document',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'en-US,en;q=0.9',
//       'if-none-match': 'W/"3c1-uSc+7AL9pjQQpSfvPLQpfoKAhy4"'
//     },
//     body: {},
//     queryParams: {},
//     requestor_ip: '::1',
//     time_received: '2022-09-14T21:25:57.349Z'
//   }

//   let result = await mongoQueries.addRequestToBin('123456789', request);
//   console.log(result);
// }

// const test3 = async () => {
//   const result = await mongoQueries.getRequestsByBinId('123456789');
//   console.log(result);
// }

// const runTests = async () => {
//   await test();
//   await test2();
//   await test3();
// }

// runTests();