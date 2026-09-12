import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
  readFile("./data.json", "utf-8", (err: Error | null, data: string | Buffer) => {
    if (err) {
      res.writeHead(500);
      res.end("Error reading data");
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data as string, () => console.log("Response sent successfully."));
  });
};