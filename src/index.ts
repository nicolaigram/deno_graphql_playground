import {
  Application,
} from "https://deno.land/x/oak/mod.ts";
import {configureRouter as setupRoutes} from "./routes/index.ts"
import { setupMiddleware } from "./middleware/index.ts";

const app = new Application();

setupMiddleware(app)
setupRoutes(app);

await app.listen({ port: 8000 });
