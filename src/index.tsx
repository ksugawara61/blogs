/** @jsx jsx */
import { Hono } from "https://deno.land/x/hono@v3.12.8/mod.ts";
import { jsx } from "https://deno.land/x/hono@v3.12.8/middleware.ts";
import { Home } from "./pages/Home/Home.tsx";

const app = new Hono();

app.get("/", (c) => c.html(<Home />));

Deno.serve(app.fetch);
