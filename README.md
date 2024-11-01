# CORS Proxy
## Overview
This repository provides a simple CORS (Cross-Origin Resource Sharing) proxy server built with Node.js and Express. A CORS proxy server enables your client-side applications to make requests to external APIs that have restricted CORS policies, allowing you to bypass these restrictions for development or specific use cases.

### Why Use a CORS Proxy?
When building client-side applications, you may need to request resources from APIs hosted on different origins (domains) than your application's domain. Due to security policies in web browsers, these cross-origin requests are often blocked unless the target server explicitly allows them by including specific CORS headers. If the API you’re accessing lacks the necessary headers, your requests may be blocked, resulting in CORS errors in the browser.

A CORS proxy can help by:

- Acting as an intermediary between your client and the target API, forwarding requests and adding CORS headers to the responses.
- Allowing your client application to access resources on external servers without modifying the API’s CORS policy, which may be impossible if you don't control the server.
- Simplifying the development and testing process by bypassing CORS restrictions locally, enabling you to focus on your frontend functionality.

### When to Use This CORS Proxy
This CORS proxy is ideal for:

1. Local Development: When you’re building and testing applications locally, and need to make API calls to third-party services that don’t allow cross-origin requests from localhost.
2. Testing External APIs: When evaluating or working with an API that doesn’t provide CORS headers or lacks customization options.
3. Environments You Control: Use the CORS proxy in staging environments or other internal development setups where CORS headers are temporarily required, but you don’t want to modify the target server’s configuration.

Note: This CORS proxy is intended for development use only. It’s generally not recommended to use this setup in production due to security considerations, as it could expose your application to potential CORS-related risks.

Getting Started
1. Clone the repository and navigate to the project directory.
2. Install dependencies with `npm install`.
3. Run the proxy server with `node server.js`.
4. Configure your frontend to make requests to the proxy server instead of directly to the external API.

## Usage

### Start the server

```bash
npm start
```

### Make a request

The base url for the proxy server is `http://localhost:3000/proxy/` and you can append the url you want to bypass cors restrictions for.
If you want to bypass cors restrictions for `http://example.com`, you can make a request to the proxy server like this:

```bash
curl http://localhost:3000/proxy/http://example.com
```

### Options
- Currently, we only supported method is `GET`