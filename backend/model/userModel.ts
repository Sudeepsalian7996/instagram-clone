import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    name: string;
    phone: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model<IUser>('User', userSchema);
