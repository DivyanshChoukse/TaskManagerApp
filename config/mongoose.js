const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://divyanshchoukse:1265cooldc@cluster0.b5ymwlx.mongodb.net/tasks?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((e) => {
    console.log("Error in connecting to database:", e.message);
  });
