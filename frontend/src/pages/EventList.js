import { useEffect, useState } from "react";
import { API } from "./api";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);
  const [type, setType] = useState("Both");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchEvents();
    }, 300);

    return () => clearTimeout(delay);
  }, [type, search]);

  const fetchEvents = async () => {
    try {
      const res = await API.get(
        `/events?type=${type}&search=${search}`
      );

      // remove duplicates safely
      const uniqueEvents = Array.from(
        new Map(res.data.map(item => [item._id, item])).values()
      );

      setEvents(uniqueEvents);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  };

  return (
    <div>
      <h2 className="mb-3">🎉 Meetup Events</h2>

      {/* FILTERS */}
      <div className="row mb-4">

        {/* Dropdown filter */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {/* Search box */}
        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="Search by title or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      {/* EVENT CARDS */}
      <div className="row">
        {events.length === 0 ? (
          <p className="text-muted">No events found</p>
        ) : (
          events.map((e) => (
            <div className="col-md-4 mb-4" key={e._id}>
              <div className="card shadow-sm h-100">

                <img
                  src={e.image}
                  alt={e.title}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{e.title}</h5>

                  <span className="badge bg-primary">{e.type}</span>

                  <p className="text-muted mt-2">{e.date}</p>

                  {/* TAGS DISPLAY */}
                  <div className="mb-2">
                    {e.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="badge bg-secondary me-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/event/${e._id}`}
                    className="btn btn-dark btn-sm"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EventList;
