//***************************************************** POST MENU ***************************************************//
//POST COMMENT//
    const submitCommentHandler = async (event) => {
        event.preventDefault();
    const comment = document.querySelector(".comment-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
    const post_id = document.querySelector(".current-post-id").innerHTML;
        if (!author_id) {
        document.location.replace("/login");
        } else {
            if (comment) {
            const response = await fetch("/api/comment/", {
                method: "POST",
                body: JSON.stringify({ comment, author_id, post_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace(
                    "/post/" + post_id + "#comment-section"
                );
                document.location.reload();
            } else {
                alert("Error❗⛔ Failed to post comment❗⛔" +
                        response.status +
                        ": " +
                        response.statusText
                );
            }
            } else {
            alert("Error❗⛔ Please fill out all required fields❗⛔");
            }
        }
    };
//DELETE COMMENT//
    const deleteCommentHandler = async (event) => {
        event.preventDefault();
    const deleteCommentId = event.target.getAttribute("data-id");
    const currentPostId = document.querySelector(".current-post-id").innerHTML;
        console.log(2);
            if (deleteCommentId) {
        const response = await fetch("/api/comment/" + deleteCommentId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
            if (response.ok) {
            document.location.replace(
                "/post/" + currentPostId + "#comment-section"
            );
            document.location.reload();
            } else {
                alert(
                "Error❗⛔ Failed to delete comment❗⛔" +
                    response.status +
                    ": " +
                    response.statusText
                );
            }
        }
    };

//EVENT LISTENERS//
    document
        .querySelector(".comment-submit")
        .addEventListener("click", submitCommentHandler);

    const deleteLinks = document.querySelectorAll(".delete-comment");
    deleteLinks.forEach((el) =>
        el.addEventListener("click", (event) => deleteCommentHandler(event))
    );