import fetch from "node-fetch";
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Configure CORS to allow requests from specific origin
app.use(cors({ origin: 'http://local.f.nio:8080' }));

// Define the proxy route
app.use('/proxy', async (req, res) => {
    const targetUrl = removeLeadingSlash(req.url);

    try {
        const response = await fetch(targetUrl, {
            method: req.method,
        });

        // Set the status and headers for the response to match the target response
        res.status(response.status);
        response.headers.forEach((value, name) => {
            res.setHeader(name, value);
        });
        console.log(`Proxying request to ${targetUrl}`);
        // Read and send the response body to the client
        const body = await response.text();
        res.send(body);
    } catch (error) {
        console.error('Error fetching target URL:', error);
        res.status(500).send('Error fetching target URL');
    }
});

// Helper function to remove leading slash from URL
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
