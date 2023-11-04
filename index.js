import express from "express";

export const bootApp = function () {
  const app = express();
  const dispatch = function (action) {
    // 🦕 register middleware in app.use
    if (action.type === "🦕") {
      app.use(...action.payload.middlewares);
      return;
    }
    // 👽 app listen on payload.port
    if (action.type === "👽") {
      const PORT = action.payload.port;
      if (action.payload.port) {
        app.listen(PORT, () =>
          console.log(`Server is running on port ${PORT}`)
        );
        return;
      }
    }
    // 🧜🏽‍♂️ register endpoint
    if (action.type === "🧜🏽‍♂️") {
      app[action.payload.method](
        action.payload.path,
        ...action.payload.middlewares.before,
        action.payload.controller,
        ...action.payload.middlewares.after
      );
      return;
    }
  };
  return dispatch;
};
