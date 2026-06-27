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
    try {
      const res = await API.get(`/events/${id}`);
      setEvent(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!event) return <h3>Loading...</h3>;

  return (
    <div className="card p-3">
      <img
        src={event.image}
        alt={event.title}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />

      <h2 className="mt-3">{event.title}</h2>

      <p><b>Type:</b> {event.type}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Topic:</b> {event.topic}</p>
      <p><b>Description:</b> {event.description}</p>

      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Address:</b> {event.address}</p>
      <p><b>Price:</b> {event.price}</p>

      <p><b>Tags:</b> {event.tags?.join(", ")}</p>
    </div>
  );
}

export default EventDetails;
