const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const athenticate = require("../middleware/authenticate");

// get api for product data

router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log("the data "+productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

// det individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const individualdata = await Products.findOne({ id: id });
    // console.log(individualdata + "individualdata");
    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("error" + error.message);
  }
});

// register the data

router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "filll the all details" });
    console.log("fill all the details");
  }

  try {
    const preuser = await USER.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password are not matching" });
    } else {
      const finaluser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      const storedata = await finaluser.save();
      console.log(storedata + "user successfully added");
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log("error for registratoin time" + error.message);
    res.status(422).send(error);
  }
});

//login data

router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill the details" });
  }

  try {
    const userlogin = await USER.findOne({ email: email });
    console.log(userlogin + "user value");

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      console.log(isMatch + "pass match");

      //token genrate
      const token = await userlogin.generateAuthtoken();
      console.log(token);

      res.cookie("Amazonweb", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      res.json({ token });
      console.log("Cookie set successfully");

      if (!isMatch) {
        res.status(400).json({ error: "invalid crediential pass" });
      } else {
        res.status(201).json({ userlogin });
      }
    } else {
      res.status(400).json({ error: "user not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: "invalid crediential pass" });
    console.log("error the bhai catch ma for login time" + error.message);
  }
});

// adding the data into cart

// router.post("/addcart/:id",athenticate, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const cart = await Products.findOne({id:id});
//     console.log(cart + "cart milta hain");

//     const UserContact = await USER.findOne({ _id:req.userID });
//     console.log(UserContact + "user milta hain");

//     if (UserContact) {
//       const cartData = await UserContact.addcartdata(cart);

//       await UserContact.save();
//       console.log(cartData + "saving user wait kr");
//       console.log(UserContact + "user save");
//       res.status(201).json(UserContact);
//     } else {
//       res.status(401).json({ error: "invalid user" });
//       console.log("erron in add to cart")
//     }
//   } catch (error) {
//     res.status(401).json({ error: "invalid user" });
//     console.log("invalid user")
//   }
// });

// router.post("/addcart/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Products.findOne({ id: id });
//     // console.log(product +"get a product")

//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     const user = req.USER; // User object attached by authentication middleware

//     if (!user) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     user.carts.push(product); // Add product to user's cart
//     await user.save();

//     res.status(201).json({ message: "Product added to cart successfully" });
//   } catch (error) {
//     console.error("Error adding product to cart:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Route to add item to cart

router.post("/addcart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findOne({ id: id });
    console.log(product +"get a product")

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    const { _id } = req.body;
    const userId = req.USER._id; // Assuming the user object contains the _id property
    console.log(userId)

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await USER.findById(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.carts) {
      user.carts = [];
    }

    USER.carts.push(product); // Add product to user's cart
    await USER.save();

    res.status(201).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
