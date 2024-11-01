## Cors proxy

This is a simple cors proxy server that can be used to bypass cors restrictions.

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