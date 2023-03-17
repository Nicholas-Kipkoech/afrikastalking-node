import Africastalking from "africastalking";
import dotenv from "dotenv";
dotenv.config();

const africastalking = Africastalking({
  apiKey: process.env.AS_API,
  username: process.env.AS_USERNAME,
});

const sendsms = async () => {
  try {
    const result = await africastalking.SMS.send({
      to: ["+254713839182"],
      message: "Hello from afrikastalking",
      from: "39182",
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default sendsms;
