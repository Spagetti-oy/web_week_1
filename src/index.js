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
    const chooseRating = document.getElementById("stars");
    var starAmount = chooseRating.options[chooseRating.selectedIndex].value;

    const commentArea = document.getElementById("comment-area");

    let comment = document.createElement("div");
    comment.setAttribute("class", "comment");
    comment.setAttribute("id", "commentDiv");

    let commentTextArea = document.createElement("div");
    commentTextArea.setAttribute("class", "comment-text");
    commentTextArea.innerHTML = commentText;

    let commentRating = document.createElement("div");
    commentRating.setAttribute("class", "comment-rating");

    if (starAmount == 1) {
      commentRating.innerHTML = starAmount + " Star";
    } else {
      commentRating.innerHTML = starAmount + " Stars";
    }

    commentArea.appendChild(comment);
    const commentDivArea = document.getElementById("commentDiv");
    commentDivArea.appendChild(commentRating);
    commentDivArea.appendChild(commentTextArea);
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
