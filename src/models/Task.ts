import mongoose, { Schema } from "mongoose";
import { DateTime } from "luxon";

const TaskSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },

    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending"
    }
    // actionDate: {
    //   type: Date,
    //   default: DateTime.now()
    // }
  },
  {
    timestamps: true
  }
);
export const Task = mongoose.model("Task", TaskSchema);
