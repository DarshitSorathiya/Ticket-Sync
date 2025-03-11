import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trainNo: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[0-9]{5}$/.test(value);
        },
        message: "Train number must be exactly 5 digits",
      },
      index: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    date: {
      type: Date,
      required: true,
    },
    departureTime: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    ticket: {
      type: String,
    },
    status: {
      type: String,
      enum: ["available", "sold", "cancelled"],
      default: "available",
    },
    interestedUsers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        contacted: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export const Ticket = mongoose.model("Ticket", ticketSchema);
