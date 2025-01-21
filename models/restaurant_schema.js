import  mongoose, {Schema, model} from "mongoose";

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    restaurant_description: { type: String, required: true },
    is_open: { type: Boolean, required: true },
    rating: { type: Number, required: true },
    review_count: { type: Number, required: true },
    keywords: { type: [String], required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    instagram: { type: String, required: true },
    reservation: { type: [String], required: true },
    hours: {
        is_open: { type: Boolean, required: true },
        start: { type: String, required: true },
        end: { type: String, required: true }
    },
    photos: { type: String, required: true },
    menu: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        photo: { type: String, required: true }
    }],
    reviews: [{
        username: { type: String, required: true },
        rating: { type: Number, required: true },
        date: { type: String, required: true },
        content: { type: String, required: true },
        photo: { type: String, required: true }
    }]
}/* , { timestamps: true } */);

export default model("Restaurant", restaurantSchema, "restaurants");
