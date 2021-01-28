import {
  Application,
  Middleware,
  Router,
} from "https://deno.land/x/oak/mod.ts";
import { configureUserRoutes } from "./users/index.ts";

const configureRouter = (app: Application) => {
  // Create router
  const router = new Router();

  // Setup root page
  router.get("/", (ctx) => {
    ctx.response.body = "Root page";
  });

  // Add sub routes
  configureUserRoutes(router);

  // Add 404 route
  router.get("/(.*)", async (ctx) => {
    ctx.response.status = 404;
    ctx.response.body = "404 | Page not Found";
  });

  // Use router in Application
  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { configureRouter };
