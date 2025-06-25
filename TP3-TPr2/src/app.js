import express from "express";
import { config } from "./config/config.js";
import { librosrouter } from "./routes/LibrosRouter.js";
const app = express();
app.use(express.json());
// app.use(
// 	morgan(":method :url :status :res[content-length] - :response-time ms"),
// ); PREGUNTAR A GPT COMO IMPLEMENTAR MORGAN

app.use("/libro", librosrouter);

app.listen(config.PORT, () => {
	const message = `🚀 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
