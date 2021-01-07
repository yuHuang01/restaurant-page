import { makeHomePage } from "./home";
import { makeMenuPage } from "./menu";
import { makeContactPage } from "./contact";

const setUpHome = (() => {
    document.getElementById("homeTab").addEventListener("click",() => {
        switchTab();
        makeHomePage();
    });
    document.getElementById("menuTab").addEventListener("click", () => {
        switchTab();
        makeMenuPage();
    });
    document.getElementById("contactTab").addEventListener("click", () => {
        switchTab();
        makeContactPage();
    });

    let switchTab = () => {
        let contentDiv = document.getElementById("content");
        contentDiv.removeChild(contentDiv.firstChild);
    }
})();

makeContactPage();
