const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// Register
// router.get("/register", async (req, res) => {
//   const user = await new User({
//     username: "krishna",
//     email: "krishna@gmail.com",
//     password: "123456",
//   });
//   await user.save();
//   res.send("hey its okay ");
// });
router.post("/register", async (req, res) => {
  try {
    // GENRATE NEW PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    // CREATE NEW USER
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // save user and respone
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
    console.log(err);
  }
});

// LOGIN

router.post("/login",async (req,res)=>{
  try{
    const user =await User.findOne({email:req.body.email});
    !user && res.status(404).json("user not found")

    const validPassword = await bcrypt.compare(req.body.password,user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  }catch (err){
    // res.status(500).json(err)
console.log(err)
  }


})

module.exports = router;