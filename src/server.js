const { createApp } = require('./app');

const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}
const { app, close } = createApp({ databasePath: process.env.DATABASE_PATH });
const server = app.listen(port, '127.0.0.1', () => {
  console.log(`Task Manager: http://localhost:${port}`);
});
server.on('error', (error) => {
  close();
  console.error(`Cannot start server: ${error.message}`);
  process.exitCode = 1;
});
function shutdown() {
  server.close(() => {
    close();
    process.exit(0);
  });
}
process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
