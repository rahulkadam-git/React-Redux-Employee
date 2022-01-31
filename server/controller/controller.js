const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/schema");

//controller for register
exports.register = (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "error found" });
    }

    const { name, surname, eCode, password, userType } = req.body;
    if (!name || !surname || !eCode || !password || !userType) {
      res.status(406).json({ err: "fill all the details" });
    }

    //hashing password
    const hashedPass = bcrypt.hashSync(password, 10);

    const newUser = new User({
      name: name,
      surname: surname,
      eCode: eCode,
      password: hashedPass,
      userType: userType,
    });

    newUser
      .save(newUser)
      .then((register) => {
        res.json(register);
      })
      .catch((error) => {
        res.status(406).json({ err: error.message || "something went wrong" });
      });
  } catch (error) {
    res.status(500).json({ err: err.message || "Error while login" });
  }
};

//controller for login
exports.login = async (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "error found" });
    }

    const { eCode, password } = req.body;
    if (!eCode || !password) {
      res.status(406).json({ err: "fill all the details" });
    }
    const user = await User.findOne({ eCode });
    if (!user) {
      return res.status(406).json({ err: "User not found" });
    }

    //compare password

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(406).json({ err: "Invalid Credentials" });

    const token = jwt.sign(
      {
        eCode: user.eCode,
        Name: user.name,
        Surname: user.surname,
        userType: user.userType,
      },
      process.env.JWT_KEY,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      eCode: user.eCode,
      Name: user.name,
      Surname: user.surname,
      userType: user.userType,
    });
  } catch (error) {
    res.status(500).json({ err: err.message || "Error while login" });
  }
};
