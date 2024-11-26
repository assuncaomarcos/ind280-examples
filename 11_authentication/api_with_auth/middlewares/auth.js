import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next) {
  // Get token from Authorization header
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({message: `Le jeton d'accès est manquant`});

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user data to the request object
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({message: 'Jeton non valide ou expiré'});
  }
}
