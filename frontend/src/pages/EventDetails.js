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

  if (!event) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container-fluid px-4">
      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-lg-8 col-md-12">

          <h2 className="mb-3">{event.title}</h2>

          <img
            src={event.image}
            alt={event.title}
            className="img-fluid rounded mb-4 w-100"
          />

          <p><b>Type:</b> {event.type}</p>
          <p><b>Date:</b> {event.date}</p>
          <p><b>Topic:</b> {event.topic}</p>

          <h4 className="mt-4">Description</h4>
          <p>{event.description}</p>

          <h4 className="mt-4">Additional Information</h4>
          <p><b>Venue:</b> {event.venue}</p>
          <p><b>Address:</b> {event.address}</p>

          <h4 className="mt-4">Event Tags</h4>
          {event.tags?.map((tag, i) => (
            <span key={i} className="badge bg-danger me-2">
              {tag}
            </span>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">

          {/* DATE CARD */}
          <div className="card shadow-sm mb-3 p-3">
            <p>📅 {event.date}</p>
            <p>📍 {event.venue}</p>
          </div>

          {/* PRICE CARD */}
          <div className="card shadow-sm mb-3 p-3">
            <h5>₹ {event.price}</h5>
          </div>

          {/* INFO CARD */}
          <div className="card shadow-sm p-3">
            <h5>Event Info</h5>
            <p><b>Type:</b> {event.type}</p>
            <p><b>Topic:</b> {event.topic}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default EventDetails;
