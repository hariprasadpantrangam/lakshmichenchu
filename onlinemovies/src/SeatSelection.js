import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import movies from "./MoviesData";

const SeatSelection = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === movieId);

  const rows = 5;
  const seatsPerRow = 6;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const toggleSeat = (seatLabel) => {
    if (selectedSeats.includes(seatLabel)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatLabel));
    } else {
      setSelectedSeats([...selectedSeats, seatLabel]);
    }
  };

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

  const calculatePrice = () => {
    return selectedSeats.reduce((total, seat) => {
      const rowLetter = seat.charAt(0);
      const price = rowLetter === "A" || rowLetter === "B" ? 300 : 200;
      return total + price;
    }, 0);
  };

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

  return (
    <div className="container">
      <h2>Select Seats for {movie?.name}</h2>
      <img
        src={movie?.img}
        alt={movie?.name}
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

      <button onClick={() => navigate(-1)}>⬅ Back</button>
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

      {/* Show summary only after booking */}
      {bookingConfirmed && (
        <div style={{ marginTop: "20px" }}>
          <h3>🎉 Confirmed Booking!</h3>
          <img
            src={movie?.img}
            alt={movie?.name}
            style={{
              width: "150px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <p>Movie: {movie?.name}</p>
          <p>Seats: {selectedSeats.join(", ")}</p>
          <p>Total Price: ₹{calculatePrice()}</p>

          {/* Pay button only appears after booking */}
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

      {/* Show scanner image after Pay */}
      {showScanner && (
        <div style={{ marginTop: "20px" }}>
          <h3>📷 Scan to Pay</h3>
          <img
            src="/images/gpay.jpg"  // Place your QR image in public/images
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
    </div>
  );
};

export default SeatSelection;
