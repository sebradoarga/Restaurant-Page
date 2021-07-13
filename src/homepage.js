const displayHomepage = (container) => {
    const displayNav = (() => {
        const navTabs = document.createElement("div");
        navTabs.setAttribute("id", "navTabs");
        document.body.appendChild(navTabs);
        document.body.insertBefore(navTabs, container);
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
    })();
    const headerImage = document.createElement("div");
    container.appendChild(headerImage);
    headerImage.setAttribute("id","headerImage");
    const pageText = document.createElement("div");
    container.appendChild(pageText);
    const pageTitle = document.createElement("h1");
    pageText.appendChild(pageTitle);
    pageText.setAttribute("id","pageText");
    pageTitle.classList.add("pageTitle");
    pageTitle.textContent = "Tommy's Pizzeria";
    const textCopy = document.createElement("p");
    pageText.appendChild(textCopy);
    textCopy.setAttribute("id","textCopy");
    textCopy.textContent = "By far the best pizza in town.";
}
    

export default displayHomepage;