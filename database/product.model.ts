import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "/default-image.png",
    },

    views: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },

    revenue: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["published", "draft"],
      default: "published",
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
