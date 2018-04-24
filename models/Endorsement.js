const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const endorsementSchema = new Schema({
    text: { type: String, required: true },
    name: { type: String, required: true },
    email: {type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
});

const Endorsement = mongoose.model("Endorsement", endorsementSchema);

module.exports = Endorsement;