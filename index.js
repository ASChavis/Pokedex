import express from "express";

const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded



app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

