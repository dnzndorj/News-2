export function renderNavigation(items) {
    document.querySelectorAll(".site-nav").forEach((nav) => {
        nav.innerHTML = items.map((item) => `<a href="#">${item}</a>`).join("");
    });
}

export function renderFooter(sections) {
    document.querySelectorAll(".footer-grid").forEach((footer) => {
        footer.innerHTML = sections.map((section) => {
            const links = section.links.map((item) => `<p>${item}</p>`).join("");
            const subtitle = section.subtitle ? `<h3>${section.subtitle}</h3>` : "";
            const contacts = section.contacts ? section.contacts.map((item) => `<p>${item}</p>`).join("") : "";

            return `
                <section>
                    <h2>${section.title}</h2>
                    ${links}
                    ${subtitle}
                    ${contacts}
                </section>
            `;
        }).join("");
    });
}

export function renderSharedLayout(siteData) {
    renderNavigation(siteData.navigation);
    renderFooter(siteData.footer);

    document.querySelectorAll(".site-footer").forEach((footer) => {
        let copyright = footer.querySelector(".copyright");

        if (!copyright) {
            copyright = document.createElement("p");
            copyright.className = "copyright";
            footer.append(copyright);
        }

        copyright.innerHTML = siteData.copyright;
    });
}
