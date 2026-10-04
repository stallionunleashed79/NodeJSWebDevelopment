import { createServer } from "http";
import express, { Express } from "express";
import { readHandler } from "./readHandler";
import cors from "cors";

const port = 3000;
const expressApp: Express = express();

expressApp.use(express.json({ limit: '5mb' }));
expressApp.use(cors({
  origin: 'http://localhost:5100', // Allow
}))

expressApp.post('/api/data', readHandler);
expressApp.use(express.static('static'));
expressApp.use(express.static('node_modules/bootstrap/dist'));
expressApp.use(express.static('dist/client'));

const server = createServer(expressApp);
server.listen(port, () => {
  console.log(`HTTP Server is running on http://localhost:${port}`);
});

