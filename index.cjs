const express = require("express");

const bootApp = function () {
  const app = express();
  const dispatch = function (action) {
    // 🦕 register middleware in app.use
    if (action.type === "🦕") {
      app.use(...action.payload.middlewares);
      return;
    }
    // 👑 app.set method in express
    if (action.type === "👑") {
      app.set(...action.payload);
      return;
    }
    // 👽 app listen on payload.port
    if (action.type === "👽") {
      const PORT = action.payload.port;
      if (PORT) {
        app.listen(PORT, () =>
          console.log(`Server is running on port ${PORT}`)
        );
        return;
      }
    }
    // 🧜🏽‍♂️ register endpoint
    if (action.type === "🧜🏽‍♂️") {
      if (action.payload.middlewares) {
        app[action.payload.method](
          action.payload.path,
          ...action.payload.middlewares.before,
          action.payload.controller,
          ...action.payload.middlewares.after
        );
        return;
      }
      app[action.payload.method](
        action.payload.path,
        action.payload.controller
      );
      return;
    }
  };
  return dispatch;
};

module.exports = { bootApp };
