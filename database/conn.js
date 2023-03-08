import mongoose from "mongoose";

const connection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.mongoDb_con);
    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connection;
