import { createServer } from "http";
import { basicHandler } from "./handler";
import express, { Express } from "express";
import { readHandler } from "./readHandler";

const port = 3000;
const expressApp: Express = express();
expressApp.get('/favicon.ico', (req, res) => res.status(404).end());
expressApp.get('*', basicHandler);
expressApp.post('/api/data', readHandler);

const server = createServer(expressApp);
server.listen(port, () => {
  console.log(`HTTP Server is running on http://localhost:${port}`);
});

