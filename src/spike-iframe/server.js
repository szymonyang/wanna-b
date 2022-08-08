import express from "express";

const app = express()
app.use(express.json());
app.use(express.static("public"));
app.get('/js', (req, res) => {
  return res.send('Received a GET HTTP method');
});



app.listen(6789, () => console.log("Node server listening on port http://localhost:6789"));