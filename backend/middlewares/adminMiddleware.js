export const adminMiddleware = (req, res, next) => {
    const user = req.user; // Assuming you have set req.user after authentication
  
    if (user && user.isAdmin) {
      next(); // User is an admin, proceed to the route
    } else {
      res.status(403).json({ message: 'Access denied. You do not have admin privileges.' });
    }
};
  