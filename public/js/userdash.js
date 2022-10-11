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

        alert(`Warning❗⛔ Post deleted❗❌` 
                            +
        document.location.replace("/userdash"));

        } else {
            alert("Error❗⛔ Failed to delete post❗⛔" +
                response.status +
                ": " +
                response.statusText);
            }
    }
};
//EVENT LISTENERS//
    const deleteButtons = document.querySelectorAll(".delete-post");
        deleteButtons.forEach((el) =>
            el.addEventListener("click", (event) => deletePostHandler(event))
    );
    document
        .querySelector(".edit-submit")
        .addEventListener("click", submitPostHandler
    );