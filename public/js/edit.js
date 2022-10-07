//***************************************************** EDIT POST MENU ***************************************************//
let image = "";
const submitPostHandler = async (event) => {
        event.preventDefault();
        console.log(image);
    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const comment = document.querySelector(".comment-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
    const post_id = document.querySelector(".current-post-id").innerHTML;

    if (!author_id) {
        alert("Error❗⛔ Unable to edit post, please login❗⛔");
    } else {
        if (title && image && content && comment) {
            const response = await fetch("/api/comment/" + post_id, {
                method: "PUT",
                body: JSON.stringify({ title, image, content, content, post_id, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace( "/post/" + post_id + "#comment-section");
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