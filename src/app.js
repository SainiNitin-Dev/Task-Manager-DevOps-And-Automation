const express = require('express');
function createApp() {
  const app = express();
  app.get('/health', (req, res) => res.json({ status: 'ok' }));
  return { app, close: () => {} };
}
module.exports = { createApp };