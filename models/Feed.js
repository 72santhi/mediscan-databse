const mongoose = require("mongoose");
const FeedSchema = new mongoose.Schema(
    {
        feedback:{
            type:String,
        },
        report:{
            type:String,
        },
        suggestions:{
            type:String,
        }
    }
);

const FeedbackModel = mongoose.model("Feedback", FeedSchema);

module.exports = FeedbackModel;