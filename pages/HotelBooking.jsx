import { useState } from "react";

function HotelBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    breakfast: false,
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date required";
    if (!formData.roomType) newErrors.roomType = "Please select a room";
    if (!formData.agree) newErrors.agree = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Booking submitted:", formData);
      alert("Booking confirmed! We’ll email your receipt.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>🏨 Hotel Booking Form ()</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Check-in:</label>
          <input
            name="checkIn"
            type="date"
            value={formData.checkIn}
            onChange={handleChange}
          />
          {errors.checkIn && <p>{errors.checkIn}</p>}
        </div>

        <div>
          <label>Check-out:</label>
          <input
            name="checkOut"
            type="date"
            value={formData.checkOut}
            onChange={handleChange}
          />
          {errors.checkOut && <p>{errors.checkOut}</p>}
        </div>

        <div>
          <label>Room Type:</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Executive Suite</option>
          </select>
          {errors.roomType && <p>{errors.roomType}</p>}
        </div>

        <div>
          <label>
            <input
              name="breakfast"
              type="checkbox"
              checked={formData.breakfast}
              onChange={handleChange}
            />
            Include breakfast (free)
          </label>
        </div>

        <div>
          <label>
            <input
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to the hotel terms and privacy policy
          </label>
          {errors.agree && <p>{errors.agree}</p>}
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default HotelBooking;
