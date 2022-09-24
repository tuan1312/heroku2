const http = require("http")
//note: muốn deploy lên hosting (heroku) thì cần phải set port với process
const port = process.env.PORT || 3000
const index = http.createServer((request, Response) => {
    Response.statuscode = 200
    Response.setHeader("Content-Type", "text/html")
    Response.write("<h1>Hello everyone !</h1>")
    Response.write("<h2>I am learning NodeJS</h2>")
    Response.write(
        "<h3>My web page has been deployed to Heroku successfully !</h3>"
      )
      Response.write("<img src=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtcN?ver=7464>")
    Response.end()
})
index.listen(port, () => {
    console.log("erver is listening at http://localhost:" + port)
})