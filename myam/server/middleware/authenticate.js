const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");
const scretKey = process.env.KEY;

const athenticate = async(req,res,next)=>{
    try {
        const token = req.cookies.Amazonweb;
        const verifyToken = jwt.verify(token,scretKey);
        console.log(verifyToken + "jwt cokkie verifyed");

        const rootUser = await USER.findOne({"tokens.token":token});
        console.log(rootUser + "rootuser geted");

        if(!rootUser){throw new Error("user not found")};

        req.token = token
        req.rootUser = rootUser
        req.userID =  rootUser._id

        next();

    } catch (error) {
        res.status(401).send("unautherized: NO tikon provided")
        console.log(error +"jwt error")
    }
}

module.exports = athenticate;