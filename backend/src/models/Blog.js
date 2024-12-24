const mongoose = require("mongoose");
const marked = require("marked");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  renderedContent: {
    type: String,
    default: "",
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

blogSchema.index({
  title: "text",
  content: "text",
});
module.exports = mongoose.model("Blog", blogSchema);
