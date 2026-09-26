import { createServer } from "http";
import { handler } from "./handler";
import { readFileSync } from "fs";
import { createServer as createHttpsServer } from "https";

const port = 3000;
const https_port = 3001;
const server = createServer(handler);
server.on("request", handler);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const httpsConfig = {
    key: readFileSync("key.pem"),
    cert: readFileSync("cert.pem")
};

const httpsServer = createHttpsServer(httpsConfig, handler);
httpsServer.listen(https_port, () => {
  console.log(`HTTPS Server is running on https://localhost:${https_port}`);
});
