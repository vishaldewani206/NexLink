import { model, ObjectId, Schema } from "mongoose";

interface ILink{
  user: ObjectId;
  name: string;
  icon: string;
  link: string;
}

const linkSchema = new Schema<ILink>({
  user:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name:{
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, {timestamps:true})


const Link = model<ILink>("Link", linkSchema)

export {type ILink,Link}