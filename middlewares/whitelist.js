const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

const whitelistMiddleware = (req, res, next) => {
  const origin = req.headers.origin;

  // Allow only if origin is whitelisted
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
};

module.exports = whitelistMiddleware;
