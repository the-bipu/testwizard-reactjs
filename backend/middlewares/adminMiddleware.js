export const adminMiddleware = (req, res, next) => {
    const user = req.user;
    console.log('User object:', user);
  
    if (user && user.isAdmin) {
      if (user.role === 'admin') {
        next();
      } else {
        res.status(403).json({ message: 'Access denied. Insufficient role privileges.' });
      }
    } else {
      res.status(403).json({ message: 'Access denied. You do not have admin privileges.' });
    }
};
