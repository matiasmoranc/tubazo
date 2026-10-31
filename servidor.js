// Sirve tubazo.html en la PC y en la red local, para abrirlo desde el celular.
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const port = process.env.PORT || 8123, file = path.join(__dirname, 'tubazo.html');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`En esta PC: http://localhost:${port}`);
  for (const nets of Object.values(os.networkInterfaces()))
    for (const n of nets)
      if (n.family === 'IPv4' && !n.internal) console.log(`En el celular (misma wifi): http://${n.address}:${port}`);
});
