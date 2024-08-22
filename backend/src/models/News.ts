import mongoose from "mongoose"

const newsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    subject: {type: String, required: true},
    date: {type: String, required: true}
});

export default mongoose.model('news', newsSchema);