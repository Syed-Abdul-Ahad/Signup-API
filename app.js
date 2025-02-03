const express = require("express")
const authRoute = require("./Routes/authRoutes")


const app = express()

app.use(express.json())

app.use("/api/v1/auth",authRoute)

const port = 5000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})