const mongoose = require("mongoose");

var PatientSchema = new mongoose.Schema({
    patientId : {
        type : String,
        required : "Required"
    },       
    // prefix : {
    //     type : String
    // },
    firstName : {
        type : String,
        required : "Required"
    },
    // middleInitial : {
    //     type : String
    // },
    lastName : {
        type : String,
        required : "Required"
    },
    // suffix : {
    //     type : String
    // },
    // title : {
    //     type : String
    // },
    // address1 : {
    //     type : String,
    //     required : "Required"
    // },
    // address2 : {
    //     type : String
    // },
    // city : {
    //     type : String,
    //     required : "Required"
    // },
    // state : {
    //     type : String,
    //     required : "Required"
    // },
    // zipCode : {
    //     type : String,
    //     required : "Required"
    // },
    // country : {
    //     type : String
    // },
    // county : {
    //     type : String
    // },
    // gender : {
    //     type : String
    // },
    // maritalStatus : {
    //     type : String
    // },
    // dob : {
    //     type : String
    // },
    // email: {
    //     type : String
    // }
});

mongoose.model("Patient", PatientSchema);
