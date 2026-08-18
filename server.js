const connectDB = require("./config/db");
connectDB();

const express = require("express");
const cors = require("cors");

const membershipRoutes = require("./routes/membershipRoutes");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const offerRoutes = require("./routes/offerRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/membership", membershipRoutes);
app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);
app.use("/offers", offerRoutes);
app.use("/auth", authRoutes);


const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});