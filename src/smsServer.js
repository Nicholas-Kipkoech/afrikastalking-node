import express from "express";
// import sendSms from "./sendsms.js";

const app = express();

const smsServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const port = process.env.PORT || 5002;

  app.listen(port, () => console.log(`server is starting on port ${port} `));
};

export default smsServer;
