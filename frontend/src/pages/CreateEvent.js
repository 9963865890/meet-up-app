import { useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "Online",
    date: "",
    image: "",
    description: "",
    topic: "",
    speakers: "",
    price: "",
    venue: "",
    address: "",
    tags: "",
    timings: "",
    dressCode: "",
    ageRestriction: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      speakers: form.speakers.split(","),
      tags: form.tags.split(","),
      price: Number(form.price)
    };

    await API.post("/events", payload);
    alert("Event Created Successfully!");
    navigate("/");
  };

  return (
    <div className="card p-4 shadow">
      <h3>Create Event</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="title" placeholder="Title" onChange={handleChange} />

        <select className="form-select mb-2" name="type" onChange={handleChange}>
          <option>Online</option>
          <option>Offline</option>
        </select>

        <input className="form-control mb-2" name="date" type="date" onChange={handleChange} />

        <input className="form-control mb-2" name="image" placeholder="Image URL" onChange={handleChange} />

        <textarea className="form-control mb-2" name="description" placeholder="Description" onChange={handleChange} />

        <input className="form-control mb-2" name="topic" placeholder="Topic" onChange={handleChange} />

        <input className="form-control mb-2" name="speakers" placeholder="Speakers (comma separated)" onChange={handleChange} />

        <input className="form-control mb-2" name="price" placeholder="Price" onChange={handleChange} />

        <input className="form-control mb-2" name="venue" placeholder="Venue" onChange={handleChange} />

        <input className="form-control mb-2" name="address" placeholder="Address" onChange={handleChange} />

        <input className="form-control mb-2" name="tags" placeholder="Tags (comma separated)" onChange={handleChange} />

        <input className="form-control mb-2" name="timings" placeholder="Timings" onChange={handleChange} />

        <input className="form-control mb-2" name="dressCode" placeholder="Dress Code" onChange={handleChange} />

        <input className="form-control mb-2" name="ageRestriction" placeholder="Age Restriction" onChange={handleChange} />

        <button className="btn btn-primary w-100">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;