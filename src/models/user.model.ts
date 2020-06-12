import mongoose, {Schema} from 'mongoose';

export const userSchema: Schema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});

export const User = mongoose.model("User", userSchema);
