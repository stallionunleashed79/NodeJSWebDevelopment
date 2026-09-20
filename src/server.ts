import { createServer } from "http";
import { handler } from "./handler";

const port = 3000;
const server = createServer();
server.on("request", handler);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});