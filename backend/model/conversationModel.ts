import mongoose, { Schema, Document } from "mongoose";

interface conversation extends Document {
    members: string[];
}

const ConversationSchema: Schema = new Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model<conversation>("Conversation", ConversationSchema)
