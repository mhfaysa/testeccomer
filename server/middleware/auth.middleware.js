import jwt from 'jsonwebtoken';

function signError() {
  const err = new Error('Unauthorized');
  err.statusCode = 401;
  return err;
}

export function requireAuth(req, _res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return next(signError());

  const token = header.slice('Bearer '.length);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    next(signError());
  }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    const err = new Error('Admin only');
    err.statusCode = 403;
    return next(err);
  }
  next();
}

