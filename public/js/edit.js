//***************************************************** EDIT POST MENU ***************************************************//
    const submitPostHandler = async (event) => {
        event.preventDefault();
    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
    const post_id = document.querySelector(".current-post-id").innerHTML;

    if (!author_id) {
        alert("Error❗⛔ Unable to edit post, please login❗⛔");
    } else {
        if (title && content) {
            const response = await fetch("/api/post/" + post_id, {
                method: "PUT",
                body: JSON.stringify({ title, content, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert("Error❗⛔ Failed to update post❗⛔" +
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

//EVENT LISTENERS//
    document
        .querySelector(".edit-submit")
        .addEventListener("click", submitPostHandler);