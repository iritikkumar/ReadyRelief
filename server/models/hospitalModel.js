const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospitalUsername: {type: String, required:true, unique:true},
    hospitalName : {type:String , required: true },
    hospitalEmail: {type:String , required: true, unique: true },
    password : {type:String },
    availableBeds: {type: Number},
    isAmbulanceAvailable: {type: Boolean},
    isDoctorAvailable: {type: Boolean},
    addressOfHospital: {type:String , required: true},
    hospitalContact: {type: Number, required:true},
    },
    { timestamps: true}
    
);

const hospitalModel = mongoose.model('hospitals' , hospitalSchema);

module.exports = hospitalModel