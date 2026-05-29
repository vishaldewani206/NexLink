
  import { model, ObjectId, Schema } from "mongoose";

interface IPage{
  user: ObjectId;
  links: ObjectId;
  theme: ObjectId;
  isPublished: boolean;
  view: number;
  title: string;
  bio: string;
}

const pageSchema = new Schema<IPage>({
  user:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    trim: true,
    maxlength: 60,
    default: "",
  },
  bio: {
    type: String,
    maxlength: 160,
    default: "",
  },
  links: [{
    type: Schema.Types.ObjectId,
    ref: "Link"
  }],
  theme:{
    type: Schema.Types.ObjectId,
    ref: "Theme"
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  view:{
    type: Number,
    default: 0
  }
}, {timestamps:true})


const Page = model<IPage>("Page", pageSchema)

export {type IPage,Page}