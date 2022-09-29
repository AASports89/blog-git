//***************************************************** USER DASHBOARD MENU ***************************************************//
    const submitPostHandler = async (event) => {
        event.preventDefault();

    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
        if (!author_id) {
            alert("Error❗⛔ Unable to post, please login❗⛔");
        } else {
        if (title && content) {
            const response = await fetch("/api/post/", {
                method: "POST",
                body: JSON.stringify({ title, content, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert(
                    "Error❗⛔ Failed to post❗⛔" +
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

//DELETE POST//
    const deletePostHandler = async (event) => {
        event.preventDefault();
    const deletePostId = event.target.getAttribute("data-id");
        if (deletePostId) {
            const response = await fetch("/api/post/" + deletePostId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
            } else {
                alert("Error❗⛔ Failed to delete post❗⛔" +
                    response.status +
                    ": " +
                    response.statusText
            );
            }
        }
    };

//EVENT LISTENERS//
    document
    .querySelector(".submit-post")
    .addEventListener("click", submitPostHandler);

    const deleteButtons = document.querySelectorAll(".delete-post");
    deleteButtons.forEach((el) =>
    el.addEventListener("click", (event) => deletePostHandler(event))
    );