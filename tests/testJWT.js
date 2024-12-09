require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const payload = { username: "testUser", role: "tester" };
const options = { expiresIn: "1h" };

try {
    const token = jwt.sign(payload, secret, options);
    console.log("Generated Token:", token);

    const decoded = jwt.verify(token, secret);
    console.log("Decoded Payload:", decoded);
} catch (err) {
    console.error("Error during JWT operation:", err.message);
}
