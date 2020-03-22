const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
// server.use(router);
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    "/del/user/:id": "/userlist/:id",
    "/modify/user/:id": "/userlist/:id",
    "/add/user": "/userlist",
    "/del/flow/:id": "/flowlist/:id",
    "/modify/flow/:id": "/flowlist/:id",
    "/add/flow": "/flowlist",
    "/rtc/steps/settings/source": "/source",
    "/rtc/steps/settings/sink": "/sink"
}))
server.use("/api", router);

server.listen(port);



//test yanlibo2021


