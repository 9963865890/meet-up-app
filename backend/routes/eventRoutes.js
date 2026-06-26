const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET ALL EVENTS (with filter + search)
router.get("/", async (req, res) => {
  const { type, search } = req.query;

  let filter = {};

  if (type && type !== "Both") {
    filter.type = type;
  }

  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  const events = await Event.find(filter);
  res.json(events);
});

// GET SINGLE EVENT
router.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

// CREATE EVENT (WITH DUPLICATE PREVENTION) ✅
router.post("/", async (req, res) => {
  try {
    // check duplicate by title
    const existing = await Event.findOne({ title: req.body.title });

    if (existing) {
      return res.status(400).json({ message: "Event already exists" });
    }

    const newEvent = new Event(req.body);
    await newEvent.save();

    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;