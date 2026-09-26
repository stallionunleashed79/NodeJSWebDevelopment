import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    console.log(`Received request: ${req.method} ${req.url}, ${req.headers.host}, ${req.headers["user-agent"]}`);
    const parsedUrl = new URL(req.url || "", `http://${req.headers.host}`);
    console.log(`Parsed URL: ${parsedUrl.href}, Pathname: ${parsedUrl.pathname}, Protocol: ${parsedUrl.protocol}, Search Params: ${parsedUrl.searchParams}`);
    if (req.method !== "GET" || parsedUrl.pathname == "/favicon.ico") {
      res.writeHead(404, { "Content-Type": "text/plain" });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      if (!parsedUrl.searchParams.has('keyword')) {
          res.write('Hello http');
      } else {
          res.write(`Hello ${parsedUrl.searchParams.get('keyword')}`);
      }
    }
    res.end();
    return;
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
};