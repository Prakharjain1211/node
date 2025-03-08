// const {addToCart,increaseQuantity,b} = require("./cartModule");

// console.log('welcome to node');
// let l = [19,23,454,64,4,61,7,32]

// l.forEach((index,value)=>{
//     console.log(index,value);

// })

// console.log(addToCart());
// console.log(increaseQuantity());
// console.log(b);

// --------------------------------------------------------------------

// let http = require("http");
// const { json } = require("stream/consumers");

// let server = http.createServer((req, res) => {
//   if (req.url == "/news") {
//     let obj = {
//       status: 1,
//       data: [
//         {
//           newsTitle: "ns",
//           newDesc: "nsDesc",
//         },
//         {
//           newsTitle: "ns1",
//           newDesc: "nsDesc1",
//         },
//       ]
//     }
//     res.end(JSON.stringify(obj));
//   }
//   if (req.url == "/") {
//     res.end("Welcome to my server");
//   }
// });

// server.listen("8000");

// --------------------------------------------------------------------

let express = require("express");
require("dotenv").config();
const { checkToken } = require("./checkTokenMiddleware");
let app = express();
app.use(express.json());
console.log(process.env.myToken);

let myPassword = "1234";

let checkPassword = (req, res, next) => {
  // console.log("Fine By Me");
  if (req.query.pass == "" || req.query.pass == undefined) {
    return res.send({ status: 0, msg: "Please Fill the Password" });
  }
  if (req.query.pass != myPassword) {
    return res.send({ status: 0, msg: "Please Fill the Correct Password" });
  }
  next();
};
app.use(checkToken); // Using the middleware
app.use(checkPassword);
app.get("/", (req, res) => {
  // http://localhost:8000
  res.send({ status: 1, msg: "Home Page API" });
});
app.get("/news", (req, res) => {
  res.send({ status: 1,checkToken , msg: "News Page API" });
});
app.get("/products", (req, res) => {
  res.send({ status: 1, msg: "News Products API" });
});
app.get("/news/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("New Details API :" + currentId);
});
app.post("/login", (req, res) => {
  //! another way
  res.status(200).json({
    status: 1,
    msg: "News login  API",
    bodyData: req.body,
    queryData: req.query,
  });

  //! one way
  // res.send({
  //   status: 1,
  //   msg: "News login  API",
  //   bodyData: req.body,
  //   queryData: req.query,
  // });

  console.log(req.body); //object
});
app.listen("8000");
