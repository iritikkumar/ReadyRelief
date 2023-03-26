const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required:true, unique:true},
    nameOfUser: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password : {type:String },
    contactNumber: {type: Number, required: true, unique: true},
    profileImage: {type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"},
    fromGoogle: {type: Boolean, default: false},
    },
    { timestamps: true}
);

const userModel = mongoose.model('users' , userSchema);

module.exports = userModel