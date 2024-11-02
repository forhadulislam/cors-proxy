const axios = require('axios');
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Configure CORS to allow requests from specific origin
app.use(cors({ origin: 'http://local.f.nio:8080' }));

app.use('/proxy', async (req, res) => {
    const targetUrl = removeLeadingSlash(req.url);

    try {
        const response = await axios({
            url: targetUrl,
            method: req.method,
            timeout: 5000, // Optional timeout adjustment
            responseType: 'stream' // Stream response to maintain compatibility
        });

        // Stream the response directly to the client
        response.data.pipe(res);
    } catch (error) {
        console.error('Error fetching target URL:', error.message);
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