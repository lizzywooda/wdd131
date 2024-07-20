import { feedings } from "./feedinginfo.js";
document.addEventListener("DOMContentLoaded", function() {
    const feedingContainer = document.getElementById("feedingContainer");


    feedings.forEach(feeding => {
        const feedingDiv = document.createElement("div");
        feedingDiv.classList.add("feeding");

        let feedingHTML = `
            <h3>${feeding.name}</h3>
            <p><strong>Breast Milk:</strong> ${feeding.breastMilk}</p>
            <p><strong>Formula:</strong> ${feeding.formula}</p>
        `;

        if (feeding.infantCereal) {
            feedingHTML += `<p><strong>Infant Cereal:</strong> ${feeding.infantCereal}</p>`;
        }
        if (feeding.fruitsOrVeggies) {
            feedingHTML += `<p><strong>Fruits or Veggies:</strong> ${feeding.fruitsOrVeggies}</p>`;
        }
        if (feeding.meatsOrBeans) {
            feedingHTML += `<p><strong>Meats or Beans:</strong> ${feeding.meatsOrBeans}</p>`;
        }
        if (feeding.dairy) {
            feedingHTML += `<p><strong>Dairy:</strong> ${feeding.dairy}</p>`;
        }

        feedingHTML += `<p><strong>How Often:</strong> ${feeding.howOften.replace(/\n/g, "<br>")}</p>`;

        feedingDiv.innerHTML = feedingHTML;
        feedingContainer.appendChild(feedingDiv);
    });

});