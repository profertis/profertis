import { Application, Router } from "oak";

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