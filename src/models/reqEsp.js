const https = require('https');
function ligarCentral(id_central, modoForEsp){
    const data = JSON.stringify({
        id: id_central,
        modo: modoForEsp
    });
    const options = {
        hostname: 'postb.in',
        port: 443,
        path: '/BjaMHEOa',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }                        
    }
    const req = https.request(options, (res)=>{
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d)=>{
            process.stdout.write(d)
        });
    });               
    req.on('error', (error)=>{
        console.error(error);
    });
    req.write(data);
    req.end();
}

module.exports = ligarCentral;