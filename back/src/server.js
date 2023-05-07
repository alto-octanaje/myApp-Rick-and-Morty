const http =require('http');
const character = require('./utils/data')

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
   if(req.url.includes('rickandmorty/character.') ){
    let id= req.url.split('/').at(-1);
    let characterFiltrado= character.find(e=>e.id===Number(id))
    res.writeHead(200),{"content-type": "application/json"}
    .end(JSON.stringify(characterFiltrado))
   }
}).listen(3001,"localhost");

// preguntamos si url incluye . nececito quedarme con el ultmo valor de la url 
// lo se paramos y .at(-1) ese id no lo entregan en strin lo parceamos anumero para usar el ===
// respuesta debe ser 200 con la inf del personaje parcear a json