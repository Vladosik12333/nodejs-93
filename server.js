const app = require("./src/app");
const { PORT } = require("./src/config");

app.listen(PORT, (error) => {
    if (error) {
        console.log("error>>>", error);
        process.exit(1);
    } else {
        console.log("Server is running. Port: ", PORT);
    }
});
