import { Middleware } from "https://deno.land/x/oak@v6.5.0/middleware.ts";
import format from "https://deno.land/x/date_fns@v2.15.0/format/index.js";
import { Application } from "https://deno.land/x/oak@v6.5.0/application.ts";

const logger: Middleware = async (ctx, next) => {
  await next();
  const timestamp = format(new Date(), "HH:mm:ss", {});
  console.log(`${timestamp} ${ctx.request.method} ${ctx.request.url}`);
};

export const setupLogger = (app: Application) => {
    app.use(logger);
}
