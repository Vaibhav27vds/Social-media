import mongoose , {Schema} from mongoose;
import mongooseAggregatePaginate from mongooseAggregatePaginate
const videoSchema = new Schema({
    videoFile: {
        type: String, // Cloudinary Url
        required: true,
    },
    thumbnail:{
        type: String, // Cloudinary Url
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    duration: {
        type:Number,
        required:true,
    },
    views: {
        type: Number,
        required: true,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        
    },
    updatedAt:{

    },
}, {timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)