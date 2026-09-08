const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const html = fs.readFileSync('standalone_index.html', 'utf8');

// Test dpaste.com
function testDpasteCom() {
  const postData = querystring.stringify({
    content: html,
    expiry_days: 365,
    title: 'DarkGuard Cyber Landing Page'
  });

  const req = https.request('https://dpaste.com/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'Mozilla/5.0'
    }
  }, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const pasteUrl = body.trim();
      console.log('DPASTE_COM_URL:', pasteUrl);
      if (pasteUrl.startsWith('http')) {
        const rawUrl = pasteUrl + '.txt';
        console.log('DPASTE_RAW_URL:', rawUrl);
        console.log('DPASTE_HTMLPREVIEW:', 'https://htmlpreview.github.io/?' + rawUrl);
      }
    });
  });

  req.on('error', e => console.error('dpaste.com error:', e));
  req.write(postData);
  req.end();
}

testDpasteCom();
