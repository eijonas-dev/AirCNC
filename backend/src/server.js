const express = require ("express");
const mongoose = require("mongoose");
const cors =  require ("cors");
const path = require ("path");

const routes = require ("./routes");

const app = express();



mongoose.connect("mongodb+srv://eijonas:Itachi357@semana09-wyyrw.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post("/users", (request, response)=>{
    return response.json({message : "Clique no botão"})
})

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(4444)

