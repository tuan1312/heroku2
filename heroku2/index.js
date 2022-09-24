const http = require("http")
const fs = require("fs")
const port = process.env.PORT || 3000
const index = http.createServer((req, res) => {
    res.statuscode = 200
    res.setHeader("Content-Type", "text/html")
    if (req.url === "/") {
        fs.readFile("./app.html", (err, data) => {
          if (err) {
            console.error(err);
          } else {
            res.write(data);
            res.end;
          }
        });
      } else if (req.url === "/greenwich") {
        fs.readFile("./greenwich.html", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.write(data);
            res.end;
          }
        });
      } else if (req.url === "/cloud") {
        fs.readFile("./cloud.html", (err, data) => {
          res.write(data);
          res.end;
        });
      } else {
        res.end("<h1>404 : Page not found</h1>");
      }
    // Response.write("<h1>Hello everyone !</h1>")
    // Response.write("<h2>I am learning NodeJS</h2>")
    // Response.write(
    //     "<h3>My web page has been deployed to Heroku successfully !</h3>"
    //   )
    //   Response.write("<img src=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtcN?ver=7464>")
    // Response.end()
})
index.listen(port, () => {
    console.log("erver is listening at http://localhost:" + port)
})