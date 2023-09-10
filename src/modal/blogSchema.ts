
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      tags: [
        {
          type: String,
        },
      ],
      image: [
        {
          type: String,
        },
      ],
      description: [
        {
          type: String,
        },
      ],
      code: [
        {
          type: String,
        },
      ],
      quote: [
        {
          type: String,
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
  });

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post