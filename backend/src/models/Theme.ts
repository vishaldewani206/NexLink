
  import { model, Schema, Types } from "mongoose";

interface ITheme{
  user: Types.ObjectId;
  bgColor: string;
  bgStyle: "dots" | "grid" | "plain";
  bgStyleColor: string;
  textColor: string;
  btnColor: string;
  btnTextColor: string;
  btnRoundness: string;
  layout: "classic" | "hero";
  profilePhoto?: string;
  titleColor: string;
  theme: Types.ObjectId;
  
}

const themeSchema = new Schema<ITheme>({
  user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, 
    },

    // Background
    bgColor: {
      type: String,
      default: "#000000",
    },

    bgStyle: {
      type: String,
      enum: ["plain", "dots", "grid"],
      default: "plain",
    },

    bgStyleColor: {
      type: String,
      default: "#111111",
    },

    // Text
    textColor: {
      type: String,
      default: "#ffffff",
    },

    titleColor: {
      type: String,
      default: "#ffffff",
    },

    // Buttons
    btnColor: {
      type: String,
      default: "#ffffff",
    },

    btnTextColor: {
      type: String,
      default: "#000000",
    },
    btnRoundness: {
      type: String,
      enum: ["none", "sm", "md", "lg", "full"],
      default: "md",
    },

    // Layout
    layout: {
      type: String,
      enum: ["classic", "hero"],
      default: "classic",
    },

    // Profile
    profilePhoto: {
      type: String,
      default: "",
    },

}, {timestamps:true})


const Theme = model<ITheme>("Theme", themeSchema)

export {type ITheme,Theme}