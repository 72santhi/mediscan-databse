const mongoose = require("mongoose");
const GallerySchema = new mongoose.Schema(
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

const GalleryModel = mongoose.model("Gallery", GallerySchemaSchema);

module.exports = GalleryModel;