const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const PatientModel = mongoose.model("Patient");

// Patient Add
router.get("/add", (req, res) => {
    res.render("add-patient");
});

// Patient Add
router.post("/add", (req, res) => {
    console.log(req.body);
    
    var patient = new PatientModel();
    patient.patientId = Math.ceil(Math.random() * 100000000) + "";
    patient.firstName = req.body.patientFullName;
    patient.lastName = req.body.patientLastName;

    patient.save((err, doc) => {
        if (!err)
        {
            //res.redirect("/patient/list");
            res.json({ message: "successfull", staus: "OK"});
        }
        else
        {
            res.send("Error Occured during save.")
        }
    });
});

// Patient List
router.get("/list", (req, res) => {
    PatientModel.find((err, docs) => {
        if (!err)
        {
            console.log(docs);
            res.send("List", { data : docs });
        }
        else
        {
            res.send("Error")
        }
    });
});

module.exports = router;