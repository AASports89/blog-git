//DEPENDENCY//
    const router = require("express").Router();
//IMPORT API ROUTES --> SEPARATELY//
    const apiRoutes = require("./api");
    const indexRoutes = require("./home-routes");
    const loginRoutes = require("./login-routes");
    const postRoutes = require("./post-routes");
    const signupRoutes = require("./signup-routes");
    const logoutRoutes = require("./logout-routes");
    const dashboardRoutes = require("./dashboard-routes");
    const editRoutes = require("./edit-routes");

//CONTROLLER --> ROUTES//
    router.use("/", indexRoutes);
    router.use("/api", apiRoutes);
    router.use("/login", loginRoutes);
    router.use("/post", postRoutes);
    router.use("/signup", signupRoutes);
    router.use("/logout", logoutRoutes);
    router.use("/dashboard", dashboardRoutes);
    router.use("/edit", editRoutes);

    module.exports = router;