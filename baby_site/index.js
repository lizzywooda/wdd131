import { milestones } from "./babyAnswers.js";

document.addEventListener("DOMContentLoaded", function() {
    const milestoneContainer = document.getElementById("milestoneContainer");

    milestones.forEach((milestone, index) => {
        const milestoneDiv = document.createElement("div");
        milestoneDiv.classList.add("milestone");
        milestoneDiv.setAttribute("id", `milestone${index}`); // Add an ID for each milestone

        // Replace '\n' with '<br>' in each category
        const physicalText = milestone.physical.replace(/\n/g, "<br>");
        const cognitiveText = milestone.cognitive.replace(/\n/g, "<br>");
        const socialText = milestone.social.replace(/\n/g, "<br>");

        milestoneDiv.innerHTML = `
            <h3>${milestone.name}</h3>
            <p>${physicalText}</p>
            <p>${cognitiveText}</p>
            <p>${socialText}</p>
            <img src="${milestone.img}" alt="milestone image">
        `;
        milestoneContainer.appendChild(milestoneDiv);

        // Hide each milestone initially
        milestoneDiv.style.display = "none";
    });

    // Add event listeners to each list item in the navigation
    const menuItems = document.querySelectorAll("main menu ul li a");
    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Hide all milestones
            milestones.forEach((milestone, i) => {
                document.getElementById(`milestone${i}`).style.display = "none";
            });

            // Show the selected milestone
            document.getElementById(`milestone${index}`).style.display = "block";
        });
    });
});
