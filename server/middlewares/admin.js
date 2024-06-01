// Admin middleware
function admin(req, res, next) {
  // Check if req.user is defined (i.e., user is authenticated)
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  // Check if user is an admin
  if (!req.user.isAdmin) {
    return res.status(403).json({ msg: "Forbidden, admin access required" });
  }

  // If user is authenticated and is an admin, continue to the next middleware or route handler
  next();
}

module.exports = admin;
