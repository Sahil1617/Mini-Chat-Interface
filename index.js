const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
.then(() =>{
    console.log("Connection success");
})
.catch((err) => console.log("error"));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index route:
app.get("/chats", async (req,res) =>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});

//New Route
app.get("/chats/new", (req, res) =>{
    res.render("new.ejs");
});

//Create route:
app.post("/chats", (req, res) =>{
    let{from, to , msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to, 
        msg: msg,
        created_at: new Date()
    });

    newChat
    .save()
    .then((res) =>{
        console.log("Chat was saved");
    })
    .catch((err) =>{
        console.log(err);
    });

    res.redirect("/chats");
});

//Edit route:
app.get("/chats/:id/edit", async (req, res) =>{
    let{id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update route:
app.put("/chats/:id",async (req, res) =>{
    let{id} = req.params;
    let{msg : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    res.redirect("/chats");
});

//Delete route:
app.delete("/chats/:id", async (req, res) =>{
    let{id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(8080, () =>{
    console.log(`listening on port 8080`);
});