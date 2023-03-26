const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Hospital = require("../models/hospitalModel");


router.post("/signupUser", async(req, res)=>{

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(     // to make password encrypted
            req.body.password, 
            process.env.PASS_SEC					
        ).toString(),
        nameOfUser:req.body.nameOfUser,
        contactNumber: req.body.contactNumber,
    });

    try{
        const savedUser = await newUser.save();			// async find
        res.status(201).json(savedUser);
    } catch(err){
        // res.status(500).json(err);
        console.log("ome");
    } 
})

router.post("/signupHospital", async(req, res)=>{
    const newHospital = new Hospital({
        hospitalUsername: req.body.hospitalUsername,
        hospitalName: req.body.hospitalName,
        hospitalContact: req.body.hospitalContact,
        password: CryptoJS.AES.encrypt(				// to make password encrypted
            req.body.password, 
            process.env.PASS_SEC					
        ).toString(),
        hospitalEmail: req.body.hospitalEmail,
        addressOfHospital: req.body.addressOfHospital,
    });

    try{
        const savedHospital = await newHospital.save();			// async finc
        res.status(201).json(savedHospital);
    } catch(err){
        res.status(500).json(err);
    } 
})

router.post("/login", async(req, res)=>{
    try{
        // console.log("try k andr  " + req.body.email);
        const userExist = await User.findOne({email: req.body.email});		//find whether user exist
        const userHospital = await Hospital.findOne({hospitalEmail: req.body.hospitalEmail});		//find whether user exist
        // console.log(userApplicant)
        // console.log(userRecruiter)
        if(!userExist && !userHospital)
        {
            return res.status(400).json("Wrong Credentials!");
        }

        else if(userExist){
            const hashedPwd = CryptoJS.AES.decrypt(						// decode the the original password
            userExist.password, 
            process.env.PASS_SEC
            );	
            const originalPwd = hashedPwd.toString(CryptoJS.enc.Utf8);	
            if(originalPwd !== req.body.password){       		//matching with org pwd
                return res.status(400).json("Wrong Password");
            }
            const accessToken = jwt.sign(						// using jwt for more security
            {
                id: userExist._id
            }, 
            process.env.JWT_SEC,
            {expiresIn: "3d"}
          );
          const {password, ...others} = userExist._doc;         
          return res.status(200).json({...others, accessToken});
        }
        else{
            // console.log("recruiter k andar")
            const hashedPwd = CryptoJS.AES.decrypt(						// decode the the original password
            userHospital.password, 
            process.env.PASS_SEC
            );		
            const originalPwd = hashedPwd.toString(CryptoJS.enc.Utf8);	
            if(originalPwd !== req.body.password){       		//matching with org pwd
                console.log("Wrong pwd")
                return res.status(400).json("Wrong Password");
            }
            // console.log("password verified")
            const accessToken = jwt.sign(						// using jwt for more security
              {
                  id: userHospital._id,
              }, 
              process.env.JWT_SEC,
              {expiresIn: "3d"}
            );
            const {password, ...others} = userHospital._doc;
            return res.status(200).json({...others, accessToken});
        }
    } catch(err){
        console.log("fail");
        return res.status(400).json(err);
    }
})

module.exports = router