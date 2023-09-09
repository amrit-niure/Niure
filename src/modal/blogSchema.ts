
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    tags:[{
        type: String
    }],
    desc : {
        type : String,
        required  : true
    }
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
  });

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post