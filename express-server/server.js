const express = require("express");
let app = express();
app.get("/", (request, response) => {
	response.send("<h1>Hello World!!</h1>");
});
app.get("/about", (request, response) => {
	response.send("<h1>Zypsie</h1>");
});
app.listen(3000, function () {
	console.log("server started");
});
