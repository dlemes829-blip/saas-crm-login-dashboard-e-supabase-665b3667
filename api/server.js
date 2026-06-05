import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = process.env.PORT || 3333;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const table = "saas_crm_login_dashboard_e_supabase_activity";

async function supabaseInsert(payload) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { demo: true, table, payload };
  const response = await fetch(SUPABASE_URL + "/rest/v1/" + table, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      authorization: "Bearer " + SUPABASE_ANON_KEY,
      "content-type": "application/json",
      prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type",
    "content-type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".html") return "text/html; charset=utf-8";
  if (ext === ".js" || ext === ".mjs") return "text/javascript; charset=utf-8";
  if (ext === ".css") return "text/css; charset=utf-8";
  if (ext === ".json") return "application/json; charset=utf-8";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  return "application/octet-stream";
}

function serveFile(res, filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return false;
  res.writeHead(200, { "content-type": contentType(filePath), "cache-control": "public, max-age=60" });
  fs.createReadStream(filePath).pipe(res);
  return true;
}

function serveFrontend(req, res) {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const safePath = urlPath.replace(/^\/+/, "");
  const assetPath = path.resolve(distDir, safePath);
  const fallbackPath = path.join(distDir, "index.html");
  const publicPreview = path.join(publicDir, "index.html");
  if (fs.existsSync(distDir) && assetPath.startsWith(distDir) && serveFile(res, assetPath)) return true;
  if (fs.existsSync(fallbackPath)) return serveFile(res, fallbackPath);
  return serveFile(res, publicPreview);
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return sendJson(res, 204, {});
  if (req.url === "/health") {
    return sendJson(res, 200, {
      ok: true,
      name: "SaaS CRM login, dashboard e Supabase",
      kind: "fullstack",
      supabase: Boolean(SUPABASE_URL),
      frontend: fs.existsSync(distDir) ? "dist" : "public-preview",
    });
  }
  if (req.url === "/api/activity" && req.method === "POST") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const payload = JSON.parse(Buffer.concat(chunks).toString("utf-8") || "{}");
    const result = await supabaseInsert({
      event: payload.event || "activity",
      metadata: payload,
    });
    return sendJson(res, 200, result);
  }
  if (req.url === "/api/summary") {
    return sendJson(res, 200, {
      name: "SaaS CRM login, dashboard e Supabase",
      domain: "CRM comercial",
      features: ["pipeline de vendas","contatos","tarefas","atividades"],
      supabaseTable: table,
    });
  }
  if (req.method === "GET" && serveFrontend(req, res)) return;
  return sendJson(res, 404, { error: "Route not found" });
});

server.listen(PORT, () => console.log("Nexus production server online on " + PORT));
