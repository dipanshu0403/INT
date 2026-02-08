const rateLimitStore = new Map();

const rateLimiter = ({
  windowMs = 60 * 1000,
  maxRequests = 100
} = {}) => {
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!rateLimitStore.has(ip)) {
      rateLimitStore.set(ip, []);
    }

    const timestamps = rateLimitStore.get(ip);

    const filtered = timestamps.filter(
      (time) => now - time < windowMs
    );

    filtered.push(now);
    rateLimitStore.set(ip, filtered);

    if (filtered.length > maxRequests) {
      return res.status(429).json({
        message: "Too many requests"
      });
    }

    next();
  };
};

export default rateLimiter;
