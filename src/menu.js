const displayMenu = (container) => {

    const Pizza = (pizzaName, extraIngredients) => {
        const name = pizzaName;

        const displayPizza = () => {
            const pizzaContainer = document.createElement("div");
            menuContainer.appendChild(pizzaContainer);
            pizzaContainer.classList.add("pizzaContainer");
            pizzaContainer.setAttribute("id", pizzaName);
            const pizzaTitle = document.createElement("h2");
            pizzaContainer.appendChild(pizzaTitle);
            pizzaTitle.classList.add("pizzaTitle");
            pizzaTitle.textContent = name;
            const pizzaImage = document.createElement("div");
            pizzaContainer.appendChild(pizzaImage);
            pizzaImage.classList.add("pizzaImage");
            const pizzaDescription = document.createElement("p");
            pizzaContainer.appendChild(pizzaDescription);
            pizzaDescription.classList.add("pizzaDescription");
            pizzaDescription.textContent = "Tomato sauce, mozzarella, ";
            for(let i = 0; i < extraIngredients.length; i++){
                if(i === extraIngredients.length - 1){
                    pizzaDescription.textContent += "and " + extraIngredients[i] + "."
                } else {
                    pizzaDescription.textContent += extraIngredients[i] + ", ";
                }
            }
        }
        return {name, displayPizza};
    };

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
        menuButton.setAttribute("id","activeButton");    
    })();
    
    const header = document.createElement("div");
    container.appendChild(header);
    header.setAttribute("id","menuHeader");
    const pageTitle = document.createElement("h1");
    header.appendChild(pageTitle);
    pageTitle.classList.add("pageTitle");
    pageTitle.setAttribute("id", "menuTitle");
    pageTitle.textContent = "Menu";
    const menuContainer = document.createElement("div");
    container.appendChild(menuContainer);
    menuContainer.setAttribute("id","menuContainer");

    const margherita = Pizza("Margherita", ["oregano"]);
    const quattro = Pizza("Quattroo Stagioni", ["mushrooms", "ham", "artichokes", "olives", "oregano"]);
    const diavola = Pizza("Diavola", ["spicy salami", "chilli pepper"]);
    const parmigiana = Pizza("Parmigiana", ["eggplants", "parmesan flakes"]);
    const funghi = Pizza("Funghi", ["mushrooms"]);
    margherita.displayPizza();
    quattro.displayPizza();
    diavola.displayPizza();
    parmigiana.displayPizza();
    funghi.displayPizza();
}

export default displayMenu;