# Bubbleq MCP Server

An official [Model Context Protocol (MCP)](https://modelcontextprotocol.io) Server for the Bubbleq Machine-to-Machine Intelligence Gateway. 

This is a **Remote MCP Server** that exposes an SSE (Server-Sent Events) endpoint. It is designed to be used with **Claude.ai (Web)** using Custom Connectors.

## Building and Running

```bash
# 1. Install dependencies
npm install

# 2. Build the server
npm run build

# 3. Start the server (runs on port 3001 by default)
npm start
```

## Creating a Public URL

Claude's Remote MCP needs a public URL to reach your server. You can use Cloudflare Tunnels (as used heavily in this project) or ngrok:

```bash
npx localtunnel --port 3001
# Or use your existing Cloudflare tunnel!
```

## Adding to Claude.ai (Web App)

1. Open **Claude.ai** and go to **Settings** in the bottom left.
2. Select **Connectors** in the sidebar.
3. Click **Add custom connector**.
4. In the URL field, enter your public URL followed by `/sse` (e.g., `https://your-tunnel.trycloudflare.com/sse`).
5. (Optional) If you added authentication, configure headers.
6. Click **Add**.

Now, in any conversation, click the sliders icon (Tools) and enable your connector!

## Publishing

If you want to deploy this permanently to a service like Cloud Run, Heroku, or Render, simply push the code and run `npm start`. It is a standard Express application.
