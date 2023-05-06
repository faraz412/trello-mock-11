const mongoose=require("mongoose");

const noticeSchema=mongoose.Schema({
    author:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    date:{type:Date, default:Date.now(), required:true}
},{versionKey:false});

const NoticeModel=mongoose.model("notice",noticeSchema);

module.exports={NoticeModel};