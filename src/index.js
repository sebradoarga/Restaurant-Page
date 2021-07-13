import displayHomePage from "./homepage";
import displayMenu from "./menu";

const content = document.getElementById("content");

const navTabs = document.createElement("div");
navTabs.setAttribute("id", "navTabs");
document.body.appendChild(navTabs);
document.body.insertBefore(navTabs, content);
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");
navTabs.appendChild(homeButton);
navTabs.appendChild(menuButton);
navTabs.appendChild(contactButton);
homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";
homeButton.setAttribute("id","activeButton");    

displayHomePage(content);

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    homeButton.setAttribute("id","");
    contactButton.setAttribute("id","");
    menuButton.setAttribute("id", "activeButton");
    displayMenu(content);
})

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuButton.setAttribute("id","");
    contactButton.setAttribute("id","");
    homeButton.setAttribute("id", "activeButton");
    displayHomePage(content);
})