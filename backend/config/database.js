const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
  const { MONGO_CLOUD_URI } = process.env;

  exports.connect = () => {
    mongoose
      .connect(MONGO_CLOUD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to CLOUD database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };
} else {
  const { MONGO_URI } = process.env;

  exports.connect = () => {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to localhost database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };
}
