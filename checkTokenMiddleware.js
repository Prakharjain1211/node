let myToken = "1234";
let checkToken = (req, res, next) => {
  // console.log("Fine By Me");
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({ status: 0, msg: "Please Fill the Token" });
  }
  if (req.query.token != process.env.myToken) {
    return res.send({ status: 0, msg: "Please Fill the Correct Token" });
  }
  next();
};
module.exports={checkToken}
