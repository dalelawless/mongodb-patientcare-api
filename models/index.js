const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PatientCare", { useNewUrlParser: true, useUnifiedTopology: true }, (error) =>{
    if (!error)
    {
        console.log("Successfully connected to the database.");
    }
    else
    {
        console.log("Error connecting to the database.");
    }
});

const patient = require("./patient.model");