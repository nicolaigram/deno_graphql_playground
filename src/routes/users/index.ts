import { Router } from "https://deno.land/x/oak@v6.5.0/router.ts";

interface User {
  name: string;
  id: string;
}

const users: {[key: string]: User} = {
  "1": {name: "Nicolai", id: "1"},
  "2": {name: "Lars", id: "2"},
}

const configureUserRoutes = (router: Router) => {
  router
    .get("/users", (ctx) => {
      ctx.response.body = users; // Automatically uses JSON response, nice
    })
    .get("/users/:id", async (ctx, next) => {
      try {
        const id = ctx.params?.id;
        if (!id) throw new Error("No id provided");
        const user = users[id];
        if (!user) throw new Error("No user found")
        ctx.response.body = user;
      } catch (error) {
        console.log(error.message)
        await next();
      }
      
    })
};

export { configureUserRoutes };
