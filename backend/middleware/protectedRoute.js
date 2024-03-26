import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(401).json({ error: "Unauthorized - User Not Found" });
      }

      // Attach user object to the request for easier access in subsequent middleware
      req.user = user;
      next();
    } catch (err) {
      // Handle token verification errors (invalid or expired token)
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }
  } catch (error) {
    console.error("Error in protectedRoute middleware:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectedRoute;
