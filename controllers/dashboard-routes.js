//DEPENDENCY & IMPORT//
    const router = require("express").Router();
    const { Post, User } = require("../models");
    const withAuthAdmin = require("../utils/auth");

    router.get("/", withAuthAdmin, async (req, res) => {
        try {
            const postData = await Post.findAll({
                include: [
                {
                    model: User,
                    attributes: ["id", "username"],
                },
            ],
            order: [["createdAt", "DESC"]],
        });

            const posts = postData.map((post) => post.get({ plain: true }));
                res.render("dashboard", {
                    loggedIn: req.session.loggedIn,
                    loggedInUserData: req.session.loggedInUserData,
                    posts: posts,
            });
            } catch (err) {
                res.status(500).json(err);
            }
    });

    module.exports = router;