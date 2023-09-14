const express = requiere("express");
const app = express();
const database = requiere("./database")

app.use(express.json());

app.post("/add", async (req, res) => {

});

app.delete("/delete/:id", async (req, res) =>{

});

app.put("/edit/:id", async (req, res) => {

});

app.get("/list", async (req, res)=>{

})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log("Servidor en ejecución en el puerto ${PORT}");
});