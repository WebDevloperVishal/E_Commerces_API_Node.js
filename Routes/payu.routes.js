// // const express = require('express');
// // const crypto  = require('crypto');
// // const router  = express.Router();
// // const { PayData } = require('../config/payu');  
// // const port  = process.env.PORT || 5000;

// // router.post('/get-payment', async (req, res) => {
// //   try {
// //     const txn_id = 'PAYU_MONEY_' + Math.floor(Math.random() * 8888888);
// //     const { amount, product, firstname, email, mobile } = req.body;

// //     const udf1 = udf2 = udf3 = udf4 = udf5 = '';
// //     const hashString =
// //       `${PayData.payu_key}|${txn_id}|${amount}|${JSON.stringify(product)}|` +
// //       `${firstname}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}||||||${PayData.payu_salt}`;

// //     const hash = crypto.createHash('sha512').update(hashString).digest('hex');

// //     const data = await PayData.payuClient.paymentInitiate({
// //       isAmountFilledByCustomer: false,
// //       txnid: txn_id,
// //       amount,
// //       currency: 'INR',
// //       productinfo: JSON.stringify(product),
// //       firstname,
// //       email,
// //       phone: mobile,
// //       surl: `http://localhost:${port}/verify/${txn_id}`,
// //       furl: `http://localhost:${port}/verify/${txn_id}`,
// //       hash
// //     });

// //     res.send(data);
// //   } catch (err) {
// //     res.status(400).send({ msg: err.message, stack: err.stack });
// //   }
// // });

// // router.post('/verify/:txnid', async (req, res) => {
// //   try {
// //     const verifiedData = await PayData.payuClient.verifyPayment(req.params.txnid);
// //     const txn          = verifiedData.transaction_details[req.params.txnid];
// //     res.redirect(`http://localhost:5173/payment/${txn.status}/${txn.txnid}`);
// //   } catch (err) {
// //     res.status(500).send({ msg: err.message });
// //   }
// // });

// // export default router;

// // routes/payu.routes.js
// require("colors");
// const express = require("express");
// const crypto  = require("crypto");
// const router  = express.Router();
// const { PayData } = require("../payu.config");   // adjust path if needed

// const port = process.env.PORT || 4500;

// /* ----------  Initiate Payment  ---------- */
// router.post("/get-payment", async (req, res) => {
//   try {
//     const txn_id = "PAYU_MONEY_" + Math.floor(Math.random() * 8888888);
//     const { amount, product, firstname, email, mobile } = req.body;

//     const udf1 = udf2 = udf3 = udf4 = udf5 = "";
//     const hashString =
//       `${PayData.payu_key}|${txn_id}|${amount}|${JSON.stringify(product)}|` +
//       `${firstname}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}||||||${PayData.payu_salt}`;

//     const hash = crypto.createHash("sha512").update(hashString).digest("hex");

//     const data = await PayData.payuClient.paymentInitiate({
//       isAmountFilledByCustomer: false,
//       txnid: txn_id,
//       amount,
//       currency: "INR",
//       productinfo: JSON.stringify(product),
//       firstname,
//       email,
//       phone: mobile,
//       surl:  `http://localhost:${port}/api/payu/verify/${txn_id}`,
//       furl:  `http://localhost:${port}/api/payu/verify/${txn_id}`,
//       hash
//     });

//     res.send(data);
//   } catch (err) {
//     res.status(400).json({ msg: err.message, stack: err.stack });
//   }
// });

// /* ----------  Verify Payment  ---------- */
// router.post("/verify/:txnid", async (req, res) => {
//   try {
//     const verifiedData = await PayData.payuClient.verifyPayment(req.params.txnid);
//     const txn = verifiedData.transaction_details[req.params.txnid];

//     if (!txn) throw new Error("Transaction not found");

//     // Make sure the redirect URL matches your front-end route
//     res.redirect(`http://localhost:5173/payment/${txn.status}/${txn.txnid}`);
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// export default router;