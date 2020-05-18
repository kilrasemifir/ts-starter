import express from 'express'

// Creation d'un serveur express
const server = express()

// definition des routes
server.get('/', (req, res)=>{res.send("hello world")})

// start server
server.listen(8080, ()=>console.log( "Serveur start" ))