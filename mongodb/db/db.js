const db = (success,err) => {
  const mongoose = require("mongoose");
  const { PORT, ADDRESS, DATABASE } = require("../config");
  mongoose.connect(`mongodb://${ADDRESS}:${PORT}/${DATABASE}`);
  mongoose.connection.once("open", () => {
    success()
    console.log("连接成功");
  });
  mongoose.connection.on('error', () =>{
    err()
  })
};
module.exports=db