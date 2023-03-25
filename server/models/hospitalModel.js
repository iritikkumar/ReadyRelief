const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospitalName : {type:String , required: true },
    hospitalEmail: {type:String , required: true, unique: true },
    password : {type:String },
    availableBeds: {type: Number, require: true},
    isAmbulanceAvailable: {type: Boolean, require: true},
    isDoctorAvailable: {type: Boolean, require: true},
    addressOfHospital: {type:String , required: true},
    },
    { timestamps: true}
);

const hospitalModel = mongoose.model('hospitals' , hospitalSchema);

module.exports = hospitalModel