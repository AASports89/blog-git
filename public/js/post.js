//***************************************************** POST MENU ***************************************************//
let image = "";
const submitCommentHandler = async (event) => {
        event.preventDefault();
            console.log(image);
    const content = document.querySelector(".content-input").value.trim();
    const comment = document.querySelector(".comment-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
    const post_id = document.querySelector(".current-post-id").innerHTML;
        if (!author_id) {
        document.location.replace("/login");
        } else {
            if (content && comment && image) {
            const response = await fetch("/api/post/", {
                method: "POST",
                body: JSON.stringify({ content, comment, image, author_id, post_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace(
                    "/post/" + post_id + "#comment-section"
                );
                document.location.reload();
            } else {
                alert("Error❗⛔ Failed to post❗⛔" +
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
//CLOUDIARY WIDGET --> IMAGE UPLOAD VIA URL//
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dhqsixgmo', uploadPreset: 'dpfyatxo'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
                image=result.info.url
                    console.log(image);
        }
    })
    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
        }, false);