import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello world!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  () => console.log("API Listening on http://localhost:8080"),
);
app.listen({ port: 8080 });