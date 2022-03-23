const express = require("express")
const app = express();
const cors  = require("cors");
const dotenv = require("dotenv")

dotenv.config();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

const { employeeRoutes, authRoutes, postsRoutes } = require("./routes");



app.use("/employees", employeeRoutes)
app.use("/auth", authRoutes)
app.use("/posts", postsRoutes)




app.listen(PORT, () => {
  console.log("Listening in port", PORT)
})