// const fs = require("fs");
// const path = require("path");
// fs.mkdir(path.join(__dirname, "static"), (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("done");
// });

//6.Create "myWebServer" module //****************************************************************************
// const http = require("http");
// const server = http.createServer(function (req, res) {
//   res.write("<h1>Request received and processed</h1>");
//   res.end();
// });
// server.listen(1234, function (err) {
//   if (err) throw err;
//   console.log("server running");
// });
//7,Inside your "myWebServer" module//****************************************************************************

// let random = require("./random");
// let randomNum = random.random();
// const http = require("http");
// const server = http.createServer(function (req, res) {
//   res.write(`${randomNum}`);
//   res.end();
// });
// server.listen(1234, function (err) {
//   if (err) console.log(error);
//   console.log("server running");
// });
//8.Create a new folder called "static"//************************************
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer(function (req, res) {
//   let filepath = req.url;
//   if (filepath == "/") {
//     filepath = "/about.html";
//   }
//   let about = __dirname + "/static/apple" + filepath;
//   let reading = fs.readFile(about, function (err, content) {
//     if (err) {
//       res.writeHead(404);
//       res.write("<h1> page not found </h1>");
//       res.end();
//     } else {
//       res.writeHead(202, { "content-type": "text/html" });
//       res.end(content);
//     }
//   });
// });
// let port = 2222;
// server.listen(port, function (err) {
//   if (err) console.log(error);
//   console.log("server running");
// });
//9 *********************************************************************************
// const http = require("http");
// const fs = require("fs");
// const mime = require("mime-types").lookup;
// const server = http.createServer((req, res) => {
//   let filepath = req.url;
//   if (filepath == "/") {
//     filepath = "/index.html";
//   } else if (filepath == "/about") {
//     filepath = "/about.html";
//   }
//   let allStatic = __dirname + "/static/apple" + filepath;
//   let allFile = fs.readFile(allStatic, function (err, content) {
//     if (err) {
//       res.writeHead(404);
//       res.write("<h1>page not found</h1>");
//       res.end();
//     } else {
//       let mimes = mime(filepath);
//       res.writeHead(200, { "content-type": mimes });
//       res.end(content);
//     }
//   });
// });
// server.listen(2223, function () {
//   console.log("serer running");
// });
//****************************************************************************
//const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//   console.log("server is running");
//   res.send("<h1>Request received and processed </h1>");
// });
// app.listen(3001);
//****************************************************************************
// const express = require("express");
// const app = express();
// const random = require("./random");
// let result = random.random();
// app.get("/", (req, res) => {
//   console.log("server is running");
//   res.send(`${result}`);
// });
// app.listen(3005);
//****************************************************************************
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   console.log("server running");
//   res.sendFile(__dirname + "/static/apple/about.html");
// });
// app.listen(2345);
//****************************************************************************
const express = require("express");
const app = express();
app.use(express.static("./static/apple"));
app.listen(2347);
