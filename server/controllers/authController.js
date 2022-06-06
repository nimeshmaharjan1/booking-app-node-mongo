import User from "../models/User";

export const register = (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save()
    res.status(201).send("User has been successfully created.")
  } catch (err) {
    next(err);
  }
};
