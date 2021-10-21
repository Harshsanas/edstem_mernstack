const { Schema, model } = require("mongoose");

//form schema for taking inputs from the form and storing in the form of database
const formSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);