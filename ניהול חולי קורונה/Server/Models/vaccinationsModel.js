const mongoose = require("mongoose");

const koronaSchema = new mongoose.Schema(
  {
    date_of_receipt_of_vaccination: {
      type: mongoose.Schema.Types.Date,
      required: true,
      dafault: () => new Date(),
    },
    the_manufacturer_of_the_vaccination: {
      type: String,
      required: true,
    },
  }, {versionKey: false},
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Korona", koronaSchema);
