const mongoose = require("mongoose");
const Event = require("./models/Event");


mongoose.connect("mongodb://likhi9834_db_user:Likhitha%409963@ac-loov08t-shard-00-00.cevj0gg.mongodb.net:27017,ac-loov08t-shard-00-01.cevj0gg.mongodb.net:27017,ac-loov08t-shard-00-02.cevj0gg.mongodb.net:27017/test?ssl=true&replicaSet=atlas-kv5vn7-shard-0&authSource=admin&appName=Cluster0");

const event = {
  title: "React Developers Meetup",
  type: "Online",
  date: "2026-07-10",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  description: "Learn React from experts",
  topic: "React JS",
  speakers: ["John Doe", "Jane Smith"],
  price: 0,
  venue: "Zoom",
  address: "Online",
  tags: ["react", "frontend"],
  timings: "10 AM - 2 PM",
  dressCode: "Casual",
  ageRestriction: "None"
};

async function insertData() {
  await Event.create(event);
  console.log("Data inserted");
  mongoose.disconnect();
}

insertData();