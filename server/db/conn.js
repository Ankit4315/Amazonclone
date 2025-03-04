const mongoose = require("mongoose");

const DB = `mongodb+srv://ankitdhakad0004:${process.env.MONGO_ATLAS_PW}@cluster0.sm9djs2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("debug", true);

mongoose
  .connect(DB, {
    dbName: "amazon",
  })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Error: " + error.message));

mongoose.Promise = global.Promise;
