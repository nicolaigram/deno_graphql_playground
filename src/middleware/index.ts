import { Application } from "https://deno.land/x/oak@v6.5.0/application.ts";
import { setupLogger } from "./logger/index.ts";

export const setupMiddleware = (app: Application) => {
    setupLogger(app);
}