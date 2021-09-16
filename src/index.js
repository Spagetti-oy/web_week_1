//Miikka Muinonen web_applications 16.9.2021
import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const commentText = document.getElementById("comment-text").value;
    const commentArea = document.getElementById("comment-area");

    let newListItem = document.createElement("li");
    newListItem.innerHTML = commentText;

    commentArea.appendChild(newListItem);
  });

  const removeCommentsButton = document.getElementById("remove-comments");

  removeCommentsButton.addEventListener("click", function () {
    const commentArea = document.getElementById("comment-area");

    if (confirm("Are you sure you want to delete all comments?")) {
      commentArea.innerHTML = "";
      //https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    } else {
    }
  });
}
