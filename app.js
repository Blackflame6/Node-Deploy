const express = require("express")
const app = express()

app.get("/", (req, res)=>{
  res.status(200).send({
    success: true,
    message: "Node deployment"
  })
})


let PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`App is running on port ${PORT}`)
})