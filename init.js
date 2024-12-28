const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("Connection success");
})
.catch((err) => console.log("error"));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "sahil",
        to: "rohit",
        msg:"send me dsa notes",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "sahil",
        msg:"sending you dsa notes",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg:"send me Exam sheets",
        created_at: new Date()
    },
    {
        from: "sahil",
        to: "purva",
        msg:"let go outside for park",
        created_at: new Date()
    },
    {
        from: "adam",
        to: "chimpys",
        msg:"let take our dog out for walking",
        created_at: new Date()
    },
    {
        from: "bobby",
        to: "mom",
        msg:"can you make coffee",
        created_at: new Date()
    },
    {
        from: "google",
        to: "sahil",
        msg:"you get hired for the role of software developer",
        created_at: new Date()
    },
    {
        from: "sahil",
        to: "google",
        msg:"Thanks",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);
