const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = 3000; // You can change this to any available port you prefer

// Configure CORS to allow requests from http://local.f.nio:8080
app.use(cors({ origin: 'http://local.f.nio:8080' }));

// Define the proxy route
app.use('/proxy', (req, res) => {
    const targetUrlAll = removeLeadingSlash(req.url);
    console.log(`req.url ${targetUrlAll}`);
    console.log(`Proxying request to ${targetUrlAll}`);
    req.pipe(request({ uri: targetUrlAll })).pipe(res);
});

function removeLeadingSlash(str) {
    if (str.charAt(0) === '/') {
        return str.slice(1);
    }
    return str;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
