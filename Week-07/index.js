import http from 'http'
const server = http.createServer((req, res) => {
    if(req.url === '/') res.end("Home Page")
    else if(req.url === '/about') res.end("About Page")
    else if(req.url === '/section') res.end("Section 1")
    else res.end('Home Page / GET')
})
const PORT = 3000
server.listen(PORT, ()=> console.log('Running on PORT:', PORT))