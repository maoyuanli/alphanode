import mongoose, {Schema} from "mongoose";

export const orderSchema: Schema = new mongoose.Schema({
    ticker: {type: String},
    orderType: {type: String},
    orderPrice: {type: String},
    orderVolumn: {type: String},
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

export const Order = mongoose.model('Order', orderSchema);
