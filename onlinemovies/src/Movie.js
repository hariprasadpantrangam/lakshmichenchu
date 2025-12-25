import { useState } from "react";
import "./styles.css";
// Example for src folder
import avengersImg from "../src/avengers.jpg"; // adjust path as needed


function Movie() {
  // Movies data
 const movies = [
  { id: "1", name: "Avengers", img:"avengersImg" },
  { id: "2", name: "KGF", img:"/kgf.jpeg" },
  { id: "3", name: "Pushpa", img:"/pushpa.jpeg" },
  { id: "4", name: "Baahubali", img:"../baahubali.jpeg" }
];


  // State management
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  // Seat grid setup
  const rows = 5;
  const seatsPerRow = 6;

  const generateSeats = () => {
    const seatLabels = [];
    for (let r = 0; r < rows; r++) {
      const rowLetter = String.fromCharCode(65 + r);
      for (let s = 1; s <= seatsPerRow; s++) {
        seatLabels.push(`${rowLetter}${s}`);
      }
    }
    return seatLabels;
  };

  const seatLabels = generateSeats();

  // Seat toggle
  const toggleSeat = (seatLabel) => {
    if (selectedSeats.includes(seatLabel)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatLabel));
    } else {
      setSelectedSeats([...selectedSeats, seatLabel]);
    }
  };

  // Price calculation
  const calculatePrice = () => {
    return selectedSeats.reduce((total, seat) => {
      const rowLetter = seat.charAt(0);
      const price = rowLetter === "A" || rowLetter === "B" ? 300 : 200;
      return total + price;
    }, 0);
  };

  // Booking & Payment
  const handleBook = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before booking!");
      return;
    }
    setBookingConfirmed(true);
  };

  const handlePay = () => {
    setShowScanner(true);
  };

  // Reset back to movie selection
  const handleBack = () => {
    setSelectedMovie(null);
    setSelectedSeats([]);
    setBookingConfirmed(false);
    setShowScanner(false);
  };

  return (
    <div className="container">
      {!selectedMovie ? (
        // Movie Selection Screen
        <>
          <h2>Select a Movie</h2>
          <div className="grid">
            {movies.map((movie) => (
              <button
                key={movie.id}
                className="movie-btn"
                onClick={() => setSelectedMovie(movie)}
              >
                <img src={movie.img} alt={movie.name} />
                <p>{movie.name}</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        // Seat Selection Screen
        <>
          <h2>Select Seats for {selectedMovie.name}</h2>
          <img
            src={selectedMovie.img}
            alt={selectedMovie.name}
            style={{
              width: "200px",
              height: "280px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          />

          <div className="seat-grid">
            {seatLabels.map((seatLabel) => {
              const isSelected = selectedSeats.includes(seatLabel);
              return (
                <button
                  key={seatLabel}
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSeat(seatLabel)}
                >
                  {seatLabel}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              Selected Seats:{" "}
              {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
            </p>
            <p>Total Price: ₹{calculatePrice()}</p>
          </div>

          <button onClick={handleBack}>⬅ Back</button>
          <button
            style={{
              marginLeft: "10px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={handleBook}
          >
            💳 Book
          </button>

          {bookingConfirmed && (
            <div style={{ marginTop: "20px" }}>
              <h3>🎉 Confirmed Booking!</h3>
              <img
                src={selectedMovie.img}
                alt={selectedMovie.name}
                style={{
                  width: "150px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p>Movie: {selectedMovie.name}</p>
              <p>Seats: {selectedSeats.join(", ")}</p>
              <p>Total Price: ₹{calculatePrice()}</p>

              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "blue",
                  color: "white",
                }}
                onClick={handlePay}
              >
                🔍 Pay (Open Scanner)
              </button>
            </div>
          )}

          {showScanner && (
            <div style={{ marginTop: "20px" }}>
              <h3>📷 Scan to Pay</h3>
              <img
                src="/gpay.jpg"
                alt="QR Scanner"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  border: "2px solid #000",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Movie;
