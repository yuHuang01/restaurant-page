import { makeContactPage } from "./contact";

export function makeHomePage(){
    let content = document.getElementById("content")
    let homeDiv = document.createElement("div");
        homeDiv.id = "homeDiv";
        homeDiv.style.height = "100%";
        homeDiv.style.paddingRight = '10%';
        homeDiv.style.paddingLeft = '10%';
        homeDiv.style.backgroundImage = 'url(https://repetavac.cdn.shoprenter.hu/custom/repetavac/image/cache/w0h0m00q80np1/spots/pizza1.jpg?v=1589569492)';
        homeDiv.style.backgroundPosition = "center";
        homeDiv.style.backgroundSize = 'cover';
        homeDiv.style.display = "flex";
        homeDiv.style.flexDirection = "column";
        homeDiv.style.justifyContent = "center";
        homeDiv.style.alignItems = "center";
    let textDiv = document.createElement("div");
        textDiv.style.width = '90%';
        textDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    let welcomeText = document.createElement("h1");
        welcomeText.textContent = "Ittali, ahol az ízek összefutnak"
        welcomeText.style.color = "white";
        welcomeText.style.fontStyle = "italic";
    let underWelcome = document.createElement("h3");
        underWelcome.textContent = "Valami újszerű, valami különleges, valami minőségi és trendi egyben!";
        underWelcome.style.color = "white";
        underWelcome.style.fontStyle = "italic";
    let underWelcome2 = document.createElement('p');
        underWelcome2.textContent = 'Ezek vagyunk mi!'
        underWelcome2.style.color = "white";
        underWelcome2.style.fontStyle = "italic";
    let orderBtn = document.createElement('button');
        orderBtn.id = "orderBtn"
        orderBtn.style.outline = "none";
        orderBtn.textContent = "Rendelj, most!"
        orderBtn.style.fontSize = "20px";
        orderBtn.style.fontWeight = "bold";
        orderBtn.style.margin = "15px auto 10px auto";
        orderBtn.style.padding = "10px 20px 10px 20px";
        orderBtn.style.borderRadius = "5px";
        orderBtn.style.border = "none";
        let switchTab = () => {
            let contentDiv = document.getElementById("content");
            contentDiv.removeChild(contentDiv.firstChild);
        }
        orderBtn.addEventListener("click", () => {
            switchTab();
            makeContactPage();
        });
    textDiv.appendChild(welcomeText);
    textDiv.appendChild(underWelcome);
    textDiv.appendChild(underWelcome2);
    textDiv.appendChild(orderBtn);
    homeDiv.appendChild(textDiv)
    content.appendChild(homeDiv);
}