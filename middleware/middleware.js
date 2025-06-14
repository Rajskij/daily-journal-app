export function requestLogger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

export function randomPageHandler(req, res, next) {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
}

export function handlesDevToolsRequests(req, res) {
  res.status(204).end();
}
