const express = require("express");
const { check} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const UserController = require("../controllers/userController");
const User = require("../model/userSchema");



router.get("/",(req,res) =>{
  res.send("ready api");
})

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */
router.post(
    "/signup",
    [
        check("first_name", "Please Enter a Valid first name")
        .not()
        .isEmpty(),
        check("last_name", "Please Enter a Valid last name")
        .not()
        .isEmpty(),
        check("age", "Please Enter a Valid age")
        .not()
        .isEmpty(),
        check("city", "Please Enter a Valid city")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password with minimum length 6").isLength({
            min: 6
        })
    ],
    UserController.signup
);


/**
 * @method - POST
 * @param - /login
 * @description - User LoginIn
 */
router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    UserController.login
  );
  

module.exports = router;

