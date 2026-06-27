import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "./api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    const res = await API.get(`/events/${id}`);
    setEvent(res.data);
  };

  if (!event) return <h4>Loading...</h4>;

  return (
    <div className="container">

      <img
        src={event.image}
        alt={event.title}
        className="img-fluid mb-4"
        style={{ borderRadius: "10px" }}
      />

      <h2>{event.title}</h2>

      <span className="badge bg-success">{event.type}</span>

      <p className="mt-3">{event.description}</p>

      <hr />

      <h5>📌 Event Info</h5>
      <p><b>Topic:</b> {event.topic}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Time:</b> {event.timings}</p>
      <p><b>Price:</b> {event.price === 0 ? "Free" : `₹${event.price}`}</p>

      <hr />

      <h5>📍 Venue</h5>
      <p>{event.venue}</p>
      <p>{event.address}</p>

      <hr />

      <h5>🎤 Speakers</h5>
      <ul>
        {event.speakers?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <hr />

      <h5>🏷 Tags</h5>
      <div>
        {event.tags?.map((tag, i) => (
          <span key={i} className="badge bg-secondary me-2">
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}

export default EventDetails;