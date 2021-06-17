var user = require("../model/user");

exports.createUser = function (req, res, next) {
  var userob = new user({
    name: req.body.body,
    mobile: req.body.mobile,
    email: req.body.email,
    address: {
      street: req.body.street,
      locality: req.body.locality,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      coordinatesType: req.body.coordinatesType,
    },
  });
  userob.save((err) => {
    if (err) {
      console.log("Author cant save", err);
    } else console.log("Author saved successfully");
  });
};

exports.getUser = function (req, res, next) {
  user.find().then((err, user_list) => {
    console.log(user_list);
    console.log(res.json);
  });
};
