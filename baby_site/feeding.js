import { feedings } from "./feedinginfo.js";

document.addEventListener("DOMContentLoaded", function() {
    const feedingContainer = document.getElementById("feedingContainer");

    feedings.forEach(feeding => {
        const card = document.createElement("div");
        card.classList.add("feeding-card");

        const cardInner = document.createElement("div");
        cardInner.classList.add("feeding-card-inner");

        const cardFront = document.createElement("div");
        cardFront.classList.add("feeding-card-front");
        cardFront.textContent = feeding.name; // Display the month range on the front

        const cardBack = document.createElement("div");
        cardBack.classList.add("feeding-card-back");

        cardBack.innerHTML = `
            <p><strong>Breast Milk:</strong> ${feeding.breastMilk}</p>
            <p><strong>Formula:</strong> ${feeding.formula}</p>
            ${feeding.infantCereal ? `<p><strong>Infant Cereal:</strong> ${feeding.infantCereal}</p>` : ''}
            ${feeding.fruitsOrVeggies ? `<p><strong>Fruits or Veggies:</strong> ${feeding.fruitsOrVeggies}</p>` : ''}
            ${feeding.meatsOrBeans ? `<p><strong>Meats or Beans:</strong> ${feeding.meatsOrBeans}</p>` : ''}
            ${feeding.dairy ? `<p><strong>Dairy:</strong> ${feeding.dairy}</p>` : ''}
            <p><strong>How Often:</strong> ${feeding.howOften.replace(/\n/g, "<br>")}</p>
        `;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        feedingContainer.appendChild(card);

        // Add click event listener to toggle flip effect
        card.addEventListener("click", function() {
            cardInner.classList.toggle("flipped");
        });
    });
});
