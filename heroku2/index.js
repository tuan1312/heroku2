const http = require("http")
//note: muốn deploy lên hosting (heroku) thì cần phải set port với process
const port = process.env.PORT || 3000
const index = http.createServer((request, Response) => {
    Response.statuscode = 200
    Response.setHeader("Content-Type", "text/html")
    Response.end("Hello everybody. I had deployed NodeJS to Heroku succeed !")
})
index.listen(port, () => {
    console.log("erver is listening at http://localhost:" + port)
})