import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>

          {/* Home Page */}
          <Route path="/" element={<EventList />} />

          {/* Event Details Page */}
          <Route path="/event/:id" element={<EventDetails />} />

          {/* CREATE EVENT PAGE */}
          <Route path="/create" element={<CreateEvent />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;