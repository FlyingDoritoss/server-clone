const express = require("express")
const app = express()

app.use(express.json())


const PORT = 5500
const connectDB = require("./db");

connectDB();


app.listen(PORT, () => console.log(`Server connected to port ${PORT}`))

process.on("unhandeledRejection", err => {
    console.log(`An error occured: ${err.message}`)
    server.close(() => process.exit(1))
})

app.use("/api/auth", require("./Auth/route"))