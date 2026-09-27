import { IncomingMessage, ServerResponse } from "http";

export const readHandler = (req: IncomingMessage, res: ServerResponse) => {
    //TODO: Implement the logic to read a file and send it as a response
    console.log("Read handler called");
  res.end();
}