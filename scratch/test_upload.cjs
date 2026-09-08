const fs = require('fs');
const https = require('https');

const html = fs.readFileSync('standalone_index.html', 'utf8');
const postData = 'content=' + encodeURIComponent(html) + '&format=url&expiry_days=365';

const req = https.request('https://dpaste.org/api/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const rawUrl = body.trim();
    console.log('RAW_URL:', rawUrl);
    if (rawUrl.startsWith('http')) {
      const cleanRaw = rawUrl.endsWith('/raw') ? rawUrl : rawUrl + '/raw';
      console.log('HTMLPREVIEW_URL:', 'https://htmlpreview.github.io/?' + cleanRaw);
    }
  });
});

req.on('error', (e) => console.error(e));
req.write(postData);
req.end();
