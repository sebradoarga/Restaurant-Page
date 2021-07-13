const displayContactPage = (container) => {
    const header = document.createElement("div");
    container.appendChild(header);
    header.setAttribute("id","contactHeader");
    const pageTitle = document.createElement("h1");
    header.appendChild(pageTitle);
    pageTitle.classList.add("pageTitle");
    pageTitle.setAttribute("id", "contactTitle");
    pageTitle.textContent = "Contact Us";
    const contactContainer = document.createElement("div");
    container.appendChild(contactContainer);
    contactContainer.setAttribute("id","contactContainer");
    const chefImage = document.createElement("div");
    chefImage.setAttribute("id", "chefImage");
    contactContainer.appendChild(chefImage);
    const contactInfo = document.createElement("div");
    contactContainer.appendChild(contactInfo);
    contactInfo.setAttribute("id","contactInfo");
    const phoneNumber = document.createElement("p");
    const email = document.createElement("p");
    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(email);
    phoneNumber.textContent = "Tel. 999-999-9999";
    email.textContent = "Email: contact@tommyspizza.com";
}

export default displayContactPage;