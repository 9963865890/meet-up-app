import { useEffect, useState } from "react";
import { API } from "./api";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    const res = await API.get(`/events/${id}`);
    setEvent(res.data);
  };

  if (!event) return <h4>Loading...</h4>;

  return (
    <div className="card shadow p-4">
      <img
        src={event.image}
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />

      <h2>{event.title}</h2>

      <span className="badge bg-success mb-2">{event.type}</span>

      <p className="text-muted">{event.date}</p>

      <p>{event.description}</p>

      <hr />

      <p><b>Topic:</b> {event.topic}</p>
      <p><b>Timings:</b> {event.timings}</p>
      <p><b>Speakers:</b> {event.speakers?.join(", ")}</p>

      <p><b>Price:</b> ₹{event.price}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Address:</b> {event.address}</p>

      <p>
        <b>Tags:</b>{" "}
        {event.tags?.map((t, i) => (
          <span key={i} className="badge bg-secondary me-1">
            {t}
          </span>
        ))}
      </p>

      <p><b>Dress Code:</b> {event.dressCode}</p>
      <p><b>Age Restriction:</b> {event.ageRestriction}</p>
    </div>
  );
}

export default EventDetails;