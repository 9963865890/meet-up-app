import { useEffect, useState } from "react";
import { API } from "./api";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);
  const [type, setType] = useState("Both");
  const [search, setSearch] = useState("");

  useEffect(() => {
  const timeout = setTimeout(() => {
    fetchEvents();
  }, 300); 

  return () => clearTimeout(timeout);
}, [type, search]);

  const fetchEvents = async () => {
    const res = await API.get(`/events?type=${type}&search=${search}`);
    setEvents(res.data);
  };

  return (
    <div>
      <h2 className="mb-3">🎉 Meetup Events</h2>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-4">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Both</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="Search by title or tags..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {events.map((e) => (
          <div className="col-md-4 mb-4" key={e._id}>
            <div className="card shadow-sm h-100">
              <img
                src={e.image}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{e.title}</h5>

                <p className="mb-1">
                  <span className="badge bg-primary">{e.type}</span>
                </p>

                <p className="text-muted">{e.date}</p>

                <Link
                  to={`/event/${e._id}`}
                  className="btn btn-dark btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;