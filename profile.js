import { profileData, siteData } from "./data.js";
import { renderSharedLayout } from "./shared.js";

function renderProfileMenu(menuItems) {
    const menu = document.querySelector(".profile-menu");

    menu.innerHTML = menuItems.map((item, index) => (
        `<a class="${index === 0 ? "active" : ""}" href="#">${item}</a>`
    )).join("");
}

function renderPublisher(publisher) {
    const header = document.querySelector(".publisher-header");
    const verifiedBadge = publisher.verified ? `<span aria-label="Verified publisher">✓</span>` : "";

    header.innerHTML = `
        <img class="publisher-photo" src="${publisher.photo}" alt="${publisher.name}">
        <div>
            <h1>${publisher.name} ${verifiedBadge}</h1>
            <p>${publisher.email}</p>
            <p>${publisher.phone}</p>
        </div>
    `;
}

function createNewsCard(card) {
    return `
        <article class="news-card">
            <img src="${card.image}" alt="">
            <h3>${card.title}</h3>
            <p>${card.date} | ${card.author}</p>
        </article>
    `;
}

function createAddCard(label) {
    return `
        <button class="add-news-card" type="button" aria-label="Add published news">
            <span>+</span>
            <strong>${label}</strong>
        </button>
    `;
}

function renderNewsSections(sections) {
    const content = document.querySelector(".profile-content");
    const existingHeader = document.querySelector(".publisher-header");

    content.innerHTML = "";
    content.append(existingHeader);

    sections.forEach((section) => {
        const wrapper = document.createElement("section");
        wrapper.className = `news-strip ${section.className ?? ""}`.trim();
        wrapper.setAttribute("aria-labelledby", `${section.id}-title`);

        const addCard = section.showAddCard ? createAddCard(section.addLabel) : "";
        const cards = section.cards.map(createNewsCard).join("");

        wrapper.innerHTML = `
            <h2 id="${section.id}-title">${section.title}</h2>
            <div class="cards-row">
                ${addCard}
                ${cards}
            </div>
        `;

        content.append(wrapper);
    });
}

function bindAuthorMode(initialValue) {
    const authorMode = document.querySelector(".author-mode");

    function updateButton(isOn) {
        authorMode.setAttribute("aria-pressed", String(isOn));
        authorMode.innerHTML = `Author<br>mode: ${isOn ? "on" : "off"}`;
    }

    updateButton(initialValue);

    authorMode.addEventListener("click", () => {
        const nextValue = authorMode.getAttribute("aria-pressed") !== "true";
        updateButton(nextValue);
    });
}

renderSharedLayout(siteData);
renderProfileMenu(profileData.menu);
renderPublisher(profileData.publisher);
renderNewsSections(profileData.sections);
bindAuthorMode(profileData.publisher.authorMode);
