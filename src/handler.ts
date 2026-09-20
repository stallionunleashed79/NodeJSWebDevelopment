import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    console.log(`Received request: ${req.method} ${req.url}, ${req.headers.host}, ${req.headers["user-agent"]}`);
    const parsedUrl = new URL(req.url || "", `http://${req.headers.host}`);
    console.log(`Parsed URL: ${parsedUrl.href}, Pathname: ${parsedUrl.pathname}, Protocol: ${parsedUrl.protocol}, Search Params: ${parsedUrl.searchParams}`);
    const data = await readFile("./data.json", "utf-8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
};