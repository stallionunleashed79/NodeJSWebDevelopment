import { createServer } from "http";
import { handler } from "./handler";

const port = 3000;
const server = createServer(handler);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});