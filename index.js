import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var workTasks = [];
var personalTasks = [];

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.render("index.ejs", {
		workToDos: workTasks,
		personalToDos: personalTasks,
	});
});

app.post("/submit", (req, res) => {
	console.log(req.body);
	switch (req.body.category) {
		case "Personal":
			personalTasks.push(req.body.taskName);
			break;
		case "Work":
			workTasks.push(req.body.taskName);
			break;
		default:
			console.log("ERROR");
	}
	res.redirect("/");
	// console.log(workTasks);
	// console.log(personalTasks);
});
