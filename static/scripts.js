document.addEventListener("DOMContentLoaded", () => {
  const voteButtons = document.querySelectorAll(".vote-button");
  voteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectID = button.dataset.projectId;
      fetch(`/rate/${projectID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: 5 }), // Example rating value
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Update the vote count on the page
            const voteCount = button.nextElementSibling;
            voteCount.textContent = `${data.votes} votes`;
          }
        });
    });
  });
});
