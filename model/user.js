var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: { type: String },
  mobile: { type: String },
  email: { type: String },
  address: {
    street: { type: String },
    locality: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    coordinatesType: { type: String }
  }
});

module.exports = mongoose.model("User", UserSchema);
