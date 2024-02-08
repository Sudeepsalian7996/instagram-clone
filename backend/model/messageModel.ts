import mongoose, {Schema, Document} from "mongoose";

interface message extends Document {
    conversationId : string;
    sender: string;
    text: string;
}

const MessageSchema: Schema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<message>("Message", MessageSchema)
