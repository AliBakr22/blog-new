const { Schema, model } = require("mongoose");

const postSchema = Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: {
        values: ["Cars", "Business", "Entertainment", "Art", "Uncategorized"],
        message: "{VALUE} is not supported.",
      },
    },
    content: { type: String, required: true },
    cover: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
