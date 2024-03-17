const app = require("./src/app");
const { PORT, DB } = require("./src/config");
const mongoose = require("mongoose");

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connetion succesful");
    app.listen(PORT, (error) => {
      if (error) {
        console.log("error:app>>>", error);
        process.exit(1);
      } else {
        console.log("Server is running. Port: ", PORT);
      }
    });
  })
  .catch((error) => {
    console.log("error:DB>>>", error);
    process.exit(1);
  });
