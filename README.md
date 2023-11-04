# surendar-yama-joy-server

```
    npm i surendar-yama-joy-server

    /**
    * 👽 app listen
    * 🧜🏽‍♂️ register endpoint
    * 🦕 register middleware
    */

    import { bootApp } from "surendar-yama-joy-server";
    const dispatch = bootApp();

    const middlewares = { before: [], after: [] };

    dispatch({
    type: "👽",
    payload: {
            port: 9999,
        },
    });

    dispatch({
    type: "🧜🏽‍♂️",
    payload: {
        path: "/",
        method: "get",
        middlewares,
        controller: function (req, res) {
                res.send("Hello World");
            },
        },
    });

```
