import { milestones } from "./babyAnswers.js";

const milestoneContainer = document.querySelector(".milestone_container");
milestones.forEach((milestone) => {
    const milestoneDiv = document.createElement("div");
    milestoneDiv.classList.add("milestone");
    milestoneDiv.innerHTML = `
        <h3>${milestone.name}</h3>
        <p>${milestone.description}</p>
        <img src="${milestone.img}" alt="milestone image">
    `;
    milestoneContainer.appendChild(milestoneDiv);
})
